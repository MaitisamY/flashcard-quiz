import { useState, useEffect } from 'react'

export function useAppFunctions() {

    // userNames 'storing the names of all users'
    const [userNames, setUserNames] = useState([]);

    // userName 'storing the name of the current user'
    const [userName, setUserName] = useState('');

    // usernameError 'storing the error message if the user name is not valid'
    const [userNameError, setUsernameError] = useState(null);

    // showContent 'storing whether the content should be shown or not'
    const [showContent, setShowContent] = useState(false);

    // terms 'storing whether the terms and conditions should be shown or not'
    const [terms, setTerms] = useState(false);

    // subject 'storing whether the subject should be shown or not'
    const [topic, setTopic] = useState('');

    // isLoading 'storing whether the loading should be shown or not'
    const [subject, setSubject] = useState(false);

    // isLoading 'storing whether the loading should be shown or not'
    const [isLoading, setIsLoading] = useState(false);

    // minutes and seconds 'storing the time left in minutes and seconds'
    const [minutes, setMinutes] = useState(10);
    const [seconds, setSeconds] = useState(0);

    // timesUp 'storing whether the time is up or not'
    const [timesUp, setTimesUp] = useState(false);

    // info 'storing whether the info should be shown or not'
    const [info, setInfo] = useState(false);

    // resultData 'storing the result data'
    const [resultData, setResultData] = useState([]);

    // open or close the info popup
    const handleInfoClick = () => {
        setInfo(!info);
    };

    // open or close the terms & introduction popup
    const handleTermsSubmit = () => {
        setTerms(!terms);
    };

    // close the terms & introduction and info popups 
    const handleOutsideClick = (event) => {
        if (event.target.id === 'terms' && terms || event.target.id === 'info' && info) {
          setTerms(false);
          setInfo(false);
        }
    };

    // remove the topic from local storage when the page is refreshed
    const handleBeforeUnload = () => {
        localStorage.removeItem('topic');
    };

    // update the timer 
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

    // start the timer for quiz
    const startTimer = () => {
        setMinutes(10);
        setSeconds(0);
        setTimesUp(false);
    };

    // conditionally render the relevent content from local storage
    useEffect(() => {
        const storedUserNames = JSON.parse(localStorage.getItem('userNames')) || [];
        const storedUserName = localStorage.getItem('userName');
        const storedTopic = localStorage.getItem('topic');
        const storedResultData = JSON.parse(localStorage.getItem('resultData')) || [];

        if(storedUserNames.length > 0) {
          setUserNames(storedUserNames);
        }
        
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

    // Event handler for form submission
    const handleNameSubmit = (enteredName) => {
        if (enteredName === '') {
            setUsernameError('Please enter your name!');
            setIsLoading(false); // Set isLoading to false immediately
        } else if (enteredName.length < 3) {
            setUsernameError('Must be 3 characters long!');
            setIsLoading(false); // Set isLoading to false immediately
        } else if (!enteredName.match(/^[a-zA-Z\s]+$/)) {
            setUsernameError('Please enter a valid name!');
            setIsLoading(false); // Set isLoading to false immediately
        } else if (enteredName.length > 25) {
          setUsernameError('Must be 25 characters or less!');
          setIsLoading(false); // Set isLoading to false immediately
        } else {
            setUsernameError(null);
            setIsLoading(true);

            const userNameEntered = enteredName.trim();

            // Check if the user already exists
            if (userNames.includes(userNameEntered)) {
                // If the user exists, proceed with setting the username and updating the state
                setTimeout(() => {
                    localStorage.setItem('userName', userNameEntered);
                    setUserName(userNameEntered);
                    setShowContent(true);
                    setIsLoading(false); // Set isLoading to false after timeout
                }, 1500);
            } else {
                // If the user doesn't exist, proceed with setting the username and updating the state
                const loadingTimeout = setTimeout(() => {
                    setIsLoading(false);
                    localStorage.setItem('userName', userNameEntered);
                    setUserName(userNameEntered);
                    setShowContent(true);

                    // Update userNames state and store in local storage
                    const updatedUserNames = [...userNames, userNameEntered];
                    setUserNames(updatedUserNames);
                    localStorage.setItem('userNames', JSON.stringify(updatedUserNames));
                }, 1500);

                return () => {
                    clearTimeout(loadingTimeout);
                };
            }
        }
    };

    // Event handler for removing a user and resultData associated with it
    const removeUserName = (nameToRemove) => {
        // Filter out the name to be removed from the userNames array
        const updatedUserNames = userNames.filter(name => name !== nameToRemove);
      
        // Filter out the result data associated with the removed user
        const updatedResultData = resultData.filter(result => result.username !== nameToRemove);
        
        // Update the userNames and resultData states and store them in local storage
        setUserNames(updatedUserNames);
        setResultData(updatedResultData);
        localStorage.setItem('userNames', JSON.stringify(updatedUserNames));
        localStorage.setItem('resultData', JSON.stringify(updatedResultData));
    };
    
    // Event handler for logging out
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

    // Event handler for leaving the quiz
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

    // Event handler for submitting a new topic
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

    // Event handler for handling result data
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
        userNames,
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
        removeUserName,
        handleTermsSubmit,
        handleInfoClick,
        handleLogout,
        handleLeaveQuiz,
        handleOutsideClick,
        handleTopicSubmit,
        handleResultData,
    };
}
