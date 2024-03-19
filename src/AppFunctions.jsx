import { useState, useEffect } from 'react'

export function useAppFunctions() {
  const [userName, setUserName] = useState('');
  const [userNameError, setUsernameError] = useState(null);
  const [showContent, setShowContent] = useState(false);
  const [terms, setTerms] = useState(false);
  const [topic, setTopic] = useState('');
  const [subject, setSubject] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [timesUp, setTimesUp] = useState(false);
  const [info, setInfo] = useState(false);
  const [resultData, setResultData] = useState([]);

  const handleInfoClick = () => {
    setInfo(!info);
  };

  const handleBeforeUnload = () => {
    // Remove the 'topic' from local storage when the page is refreshed
    localStorage.removeItem('topic');
  };

  useEffect(() => {
    let countdownTime = minutes * 60 + seconds;
    let intervalId;

    const updateTimer = () => {
      setMinutes(Math.floor(countdownTime / 60));
      setSeconds(countdownTime % 60);
      countdownTime -= 1;

      if (countdownTime < 0) {
        clearInterval(intervalId);
        setTimesUp(true);
      }
    };

    intervalId = setInterval(updateTimer, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, [minutes, seconds]);

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    const storedTopic = localStorage.getItem('topic');
    const storedResultData = JSON.parse(localStorage.getItem('resultData')) || [];
    
    if(storedResultData.length > 0) {
      setResultData(storedResultData);
    }

    if (storedUserName && !storedTopic) {
      setUserName(storedUserName);
      setShowContent(true);
      setUsernameError(null);
    } else if (storedUserName && storedTopic) {
      setUserName(storedUserName);
      setUsernameError(null);
      setShowContent(true);
      setTopic(storedTopic);
      setSubject(true);
      startTimer();
    } else {
      setShowContent(false);
    }

    // Add an event listener for the beforeunload event
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    if(userNameError !== null && userName.length >= 6) {
      setUsernameError(null);
    }
  }, [userName, userNameError])

  const startTimer = () => {
    setMinutes(10);
    setSeconds(0);
    setTimesUp(false);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    const enteredName = e.target.elements.name.value;
    if (enteredName === '') {
        setUsernameError('Please enter your name!')
    } else if (enteredName.length < 3) {
      setUsernameError('Must be 3 characters long!');
    } else if (!enteredName.match(/^[a-zA-Z\s]+$/)) {
      setUsernameError('Please enter a valid name!');
    } else {
        setUsernameError(null);
        setIsLoading(true);

        const loadingTimeout = setTimeout(() => {
          setIsLoading(false);

          const userNameEntered = enteredName.trim();
          localStorage.setItem('userName', userNameEntered);
          setUserName(enteredName);
          setShowContent(true);
        }, 1500);

        return () => {
          clearTimeout(loadingTimeout);
        };
    }
  };

  const handleTermsSubmit = () => {
    setTerms(!terms);
  };

  const handleLogout = () => {
    setIsLoading(true);

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);

      localStorage.removeItem('userName');
      localStorage.removeItem('topic');
      setUserName('');
      setTopic('');
      setShowContent(false);
      setSubject(false);
    }, 1000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  };

  const handleLeaveQuiz = () => {
    setIsLoading(true);

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);

      localStorage.removeItem('topic');
      setTopic('');
      setShowContent(true);
      setSubject(false);
      startTimer(); // Reset the timer when leaving the quiz
    }, 2000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  };

  const handleOutsideClick = (event) => {
    if (event.target.id === 'terms' && terms || event.target.id === 'info' && info) {
      setTerms(false);
      setInfo(false);
    }
  };

  const handleTopicSubmit = (clickedTopic) => {
    setIsLoading(true);

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);

      localStorage.setItem('topic', clickedTopic);
      setTopic(clickedTopic);
      setSubject(true);
      startTimer(); // Reset the timer when submitting a new topic
    }, 2500);

    return () => {
      clearTimeout(loadingTimeout);
    };
  };

  const handleResultData = (username, score, topic) => {
    const newResult = {
      username,
      score,
      topic,
    };
    
    // Check if the topic for the given username is already in the resultData array
    const existingIndex = resultData.findIndex((item) => item.topic === topic && item.username === username);
    
    if (existingIndex !== -1) {
      // If the topic for the given username already exists, update its score
      const updatedResultData = [...resultData];
      updatedResultData[existingIndex] = newResult;
      
      // Update state
      setResultData(updatedResultData);
      
      // Update local storage
      localStorage.setItem('resultData', JSON.stringify(updatedResultData));
    } else {
      // If the topic for the given username doesn't exist, add the new result
      // Update state
      setResultData((prevResultData) => [...prevResultData, newResult]);
      
      // Update local storage
      const storedResultData = JSON.parse(localStorage.getItem('resultData')) || [];
      const updatedStoredResultData = [...storedResultData, newResult];
      localStorage.setItem('resultData', JSON.stringify(updatedStoredResultData));
    }

    // Continue with the rest of your logic
    setIsLoading(true);

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);

      localStorage.removeItem('topic');
      setTopic('');
      setShowContent(true);
      setSubject(false);
      startTimer(); // Reset the timer when leaving the quiz
    }, 2000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  };


  return {
    userName,
    userNameError,
    showContent,
    terms,
    info,
    topic,
    subject,
    isLoading,
    minutes,
    seconds,
    timesUp,
    resultData,
    handleNameSubmit,
    handleTermsSubmit,
    handleInfoClick,
    handleLogout,
    handleLeaveQuiz,
    handleOutsideClick,
    handleTopicSubmit,
    handleResultData,
  };
}
