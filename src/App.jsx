/*
    path/root/src/App.jsx
    Imports:
    ||
    \/
*/
import { useAppFunctions } from './AppFunctions'
import Login from './components/Login'
import Content from './components/Content'
import Topic from './components/Topic'
import TOPICS_DATA from "./data/topics"
import QUESTIONS from './data/questions'
import Flashcard from './components/Flashcard'
import Loader from './assets/loading.gif'
import './App.css'

// App function
function App() {

    // App functions, variables, states and effects. 
    const {
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
    } = useAppFunctions();

  // Filter flashcards based on the selected topic
  const filteredFlashcards = QUESTIONS.filter((flashcard) => flashcard.topic === topic);
  
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
                        <Flashcard flashcards={filteredFlashcards} timer={timesUp} handleResultData={handleResultData} />
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
                        <Flashcard flashcards={filteredFlashcards} handleLeaveQuiz={handleLeaveQuiz} handleResultData={handleResultData} />
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
                        heading={<h2>Select a topic to start the quiz</h2>}
                        handleLogout={handleLogout}
                        info={info}
                        handleInfoClick={handleInfoClick}
                        handleOutsideClick={handleOutsideClick}
                    >
                      <Topic topics={TOPICS_DATA} onTopicClick={handleTopicSubmit} resultData={resultData} />
                    </Content>
                  )
                ) : (
                  <Login
                    userNames={userNames}
                    userName={userName}
                    userNameError={userNameError}
                    terms={terms}
                    handleNameSubmit={handleNameSubmit}
                    handleTermsSubmit={handleTermsSubmit}
                    handleOutsideClick={handleOutsideClick}
                    removeUserName={removeUserName}
                  />
                )}
              </>
            )}
            <div id="less-than-300-px">
                <p>Sorry! We do not support mobile devices less than 300px wide.</p>
            </div>
        </>
    );
}

export default App


