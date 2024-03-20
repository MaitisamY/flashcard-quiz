import { useState } from 'react'
import PropTypes from 'prop-types'
import { useAppFunctions } from '../AppFunctions'

function Flashcard({ flashcards, timer, handleResultData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const currentFlashcard = flashcards[currentIndex];
  const [count, setCount] = useState(1);

  const { userName } = useAppFunctions()

  const handleAnswerClick = (questionId, selectedIndex) => {
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionId]: selectedIndex,
    }));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setCount((prevCount) => prevCount - 1);
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
  
    // Create a copy of selectedAnswers to avoid mutating state directly
    const selectedAnswersCopy = { ...selectedAnswers };
  
    // Iterate through flashcards
    flashcards.forEach((flashcard) => {
      const questionId = flashcard.id;
      const correctAnswerIndex = flashcard.correctAnswer;
  
      // Check if the user has selected an answer for this question
      if (selectedAnswersCopy.hasOwnProperty(questionId)) {
        const userAnswerIndex = selectedAnswersCopy[questionId];
  
        // Check if the user's answer is correct
        const isCorrect = userAnswerIndex === correctAnswerIndex;
  
        // Update the total correct answers
        if (isCorrect) {
          correctAnswers++;
        }
  
        // Update the selected answer to include whether it is correct or not
        selectedAnswersCopy[questionId] = { userAnswerIndex, isCorrect };
      }
    });
  
    setScore(correctAnswers);
    setResult(true);
  };
  

  const handleSlide = (direction) => {
    setIsVisible(false);

    setTimeout(() => {
      // Your logic to handle the next/previous flashcard
      if (direction === 'next') {
        handleNext();
      } else if (direction === 'previous') {
        handlePrevious();
      }

      setIsVisible(true);
    }, 500); // Adjust the delay to match the transition duration
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledQuestions = shuffleArray(currentFlashcard);

  return (
    <>
      {timer ? (
        <div id="timesUp">
          <div id="timeout-view">
            <h4>{`Time's up!`}</h4>
            <h4>{(score / 10) * 100}%</h4>
            <button onClick={() => handleResultData(userName, (score / 10) * 100, currentFlashcard.topic)}>Submit</button>
          </div>
        </div>
      ) : !currentFlashcard ? (
        <p id="no-flashcards">No flashcards found. We are working on it.</p>
      ) : (
        result ? (
          <div id="timesUp">
            <div id="result-view">
              <h2>Result</h2>
              <table>
                <thead>
                  <tr>
                    <th><h4>Total questions</h4></th>
                    <th><h4>Correct answers</h4></th>
                    <th><h4>Wrong / not attempted answers</h4></th>
                    <th><h4>Accuracy</h4></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><h4>{10}</h4></td>
                    <td><h4>{score}</h4></td>
                    <td><h4>{10 - score}</h4></td>
                    <td><h4>{(score / 10) * 100}%</h4></td>
                    <td><button onClick={() => handleResultData(userName, (score / 10) * 100, currentFlashcard.topic)}>Exit</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <>
          <div id="flashcard" className={isVisible ? '' : 'hidden'}>
            <h4>Q.{count}- {currentFlashcard.question}</h4>
            <ul>
            {currentFlashcard.answers.map((answer, index) => (
              
                <li key={index}>
                  <input
                    type="radio"
                    id={`answer-${index}`}
                    name={`answer-${currentFlashcard.id}`}
                    value={index}
                    checked={selectedAnswers[currentFlashcard.id] === index}
                    onChange={() => handleAnswerClick(currentFlashcard.id, index)}
                  />
                  <label htmlFor={`answer-${index}`}>{answer}</label>
                </li>
            ))}
            </ul>
          </div>
          <div id="controls">
            {currentIndex > 0 && (
              <button onClick={() => handleSlide('previous')}>Previous</button>
            )}
            {currentIndex < flashcards.length - 1 ? (
              <button onClick={() => handleSlide('next')}>Next</button>
            ) : (
              <button onClick={handleSubmit}>Submit</button>
            )}
          </div>
        </>
        ) 
      )}
    </>
  );
}

Flashcard.propTypes = {
  flashcards: PropTypes.array,
  timer: PropTypes.string,
  handleResultData: PropTypes.func
}

export default Flashcard