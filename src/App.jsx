import { useState, useEffect } from 'react';
import { useAppFunctions } from './AppFunctions';
import Login from './components/Login'
import Content from './components/Content'
import Topic from './components/Topic'
import TOPICS_DATA from "./data/topics"
import QUESTIONS from './data/questions'
import Flashcard from './components/Flashcard';
import Loader from './assets/loading.gif';
import './App.css'

export default function App() {
  const {
    userName,
    showContent,
    terms,
    topic,
    subject,
    isLoading,
    minutes,
    seconds,
    timesUp,
    quizResult,
    handleNameSubmit,
    handleTermsSubmit,
    handleLogout,
    handleLeaveQuiz,
    handleOutsideClick,
    handleTopicSubmit,
    handleSaveResult,
  } = useAppFunctions();

  // const [minutes, setMinutes] = useState(10);
  // const [seconds, setSeconds] = useState(0);
  // const [timesUp, setTimesUp] = useState(false);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (minutes === 0 && seconds === 0) {
  //         clearInterval(intervalId);
  //         setTimesUp(true);
  //       } else {
  //         if (seconds === 0) {
  //           setMinutes((prevMinutes) => prevMinutes - 1);
  //           setSeconds(59);
  //         } else {
  //           setSeconds((prevSeconds) => prevSeconds - 1);
  //         }
  //       }
  //   }, 1000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [minutes, seconds]);

  const filteredFlashcards = QUESTIONS.filter((flashcard) => flashcard.topic === topic);
  
  const handleFlashcardSubmit = () => {
    // Handle flashcard submission logic here
    // You might want to track user answers, calculate score, etc.
  };
  return (
    <>
      {isLoading ? (
        <div id="loading-spinner">
            <img src={Loader} alt="Loading" width={100} />
        </div>
      ) : (
        <>
          {showContent ? (
            subject ? (
              timesUp ? (
                <Content
                  heading={ 
                    <h5>
                      <span id="timer">Time: 
                        {`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
                      </span>
                    </h5>
                  } 
                    subject={<h2>{topic}</h2>}
              >
                  <Flashcard flashcards={filteredFlashcards} timer={timesUp} />
              </Content>
              ) : filteredFlashcards.length > 0 ? (
                <Content
                  heading={<>
                    <h5>Total Questions: {filteredFlashcards.length} &nbsp; 
                      <div id="timer">
                          {`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
                      </div>
                    </h5>
                  </>} 
                    subject={<h2>{topic}</h2>}
              >
                  <Flashcard flashcards={filteredFlashcards} handleLeaveQuiz={handleLeaveQuiz} />
              </Content>
              ) : (
                <Content
                  heading={<>
                    <h2>{topic}</h2>
                  </>} 
                    handleLeaveQuiz={handleLeaveQuiz}
                >
                  <Flashcard flashcards={filteredFlashcards} />
                </Content>
              )
            ) : (
              <Content
                  greeting={<h1>{`Welcome, ${userName}!`}</h1>}
                  heading={<h2>Select a topic to get started</h2>}
                  handleLogout={handleLogout}
              >
                <div id="tag-holder">
                  <div className="tags blue">Every quiz is of 10:00 minutes.</div>
                  <div className="tags blue">Refreshing the page will end the quiz.</div>
                  <div className="tags blue">Quiz's results are not saved as there is no database to keep track.</div>
                </div>
                <Topic topics={TOPICS_DATA} onTopicClick={handleTopicSubmit} />
              </Content>
            )
          ) : (
            <Login
              terms={terms}
              handleNameSubmit={handleNameSubmit}
              handleTermsSubmit={handleTermsSubmit}
              handleOutsideClick={handleOutsideClick}
            />
          )}
        </>
      )}
    </>
  );
}



