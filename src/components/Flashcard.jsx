/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function Flashcard({ flashcards, timer, handleLeaveQuiz }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const currentFlashcard = flashcards[currentIndex];
  const handleAnswerClick = (questionId, selectedIndex) => {
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionId]: selectedIndex,
    }));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleSubmit = () => {
    const totalQuestions = flashcards.length;
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
  
    // Calculate the score
    setScore(correctAnswers);
  
    // Update the state with the result
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

  return (
    <>
      {timer ? (
        <div id="timesUp">
          <div id="timeout-view">
            <h4>{`Time's up!`}</h4>
            <h4>00:00</h4>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      ) : !currentFlashcard ? (
        <p id="no-flashcards">No flashcards found. We are working on it.</p>
      ) : (
        result ? (
          <div id="timesUp">
            <div id="result-view">
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
                    <td><button onClick={handleLeaveQuiz}>Exit</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <>
          <div id="flashcard" className={isVisible ? '' : 'hidden'}>
            <h4>Q.{currentFlashcard.id}- {currentFlashcard.question}</h4>
            {currentFlashcard.answers.map((answer, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`answer-${index}`}
                  name={`answer-${currentFlashcard.id}`}
                  value={index}
                  checked={selectedAnswers[currentFlashcard.id] === index}
                  onChange={() => handleAnswerClick(currentFlashcard.id, index)}
                />
                <label htmlFor={`answer-${index}`}>{answer}</label>
              </div>
            ))}
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
