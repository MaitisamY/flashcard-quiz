/* eslint-disable react/jsx-no-target-blank */
import PropTypes from 'prop-types'

function Terms({ handleTermsSubmit, handleOutsideClick }) {
    return (
        <div id="terms" onClick={handleOutsideClick}>
            <div id="content">
                <a className="close" onClick={handleTermsSubmit}>X</a>
                <h2>Terms & Introduction</h2>
                <>
                    <h3>Introduction</h3>
                    <p>
                        Flashcard Quiz is an interactive web application designed to help users practice and test their knowledge 
                        on various topics. With multiple-choice answer selection and minor animations, users can engage in an enjoyable 
                        learning experience. The app utilizes local storage for certain functionalities and provides a seamless quiz-taking 
                        process. Flashcard quiz takes your name to only save your quiz progress and show you the results related only to you.
                    </p>

                    <h6>You can remove your added names at any time.</h6>

                    <h4>Features</h4>
                    <ol>
                        <li>
                            <strong>User Authentication:</strong> Users can enter their names to start taking quizzes.
                        </li>
                        <li>
                            <strong>Multi-User System:</strong> Users can add as many names (account) as they want upon signing in, this allows
                            them to maintain a personalized experience and keep track of their progress for each account separately.
                        </li>
                        <li>
                            <strong>Topic Selection:</strong> Choose from multiple topics to begin the quiz.
                        </li>
                        <li>
                            <strong>Quiz Interface:</strong> Quiz view presents one question at a time with navigation buttons for 
                            moving to the next or previous question.
                        </li>
                        <li>
                            <strong>Answer Selection:</strong> Select the correct answer from the multiple-choice options provided.
                        </li>
                        <li>
                            <strong>Timer:</strong> Each quiz has a 10-minute timer to keep track of the duration. If time runs out, 
                            only the correct answers amongst the attempted questions are considered for the result.
                        </li>
                        <li>
                            <strong>Blur Effect:</strong> After completing a quiz, the quiz interface is blurred, and the result is displayed.
                        </li>
                        <li>
                            <strong>Quiz Retake:</strong> Users can retake quizzes as many times as they want.
                        </li>
                        <li>
                            <strong>Local Storage:</strong> Utilizes local storage for storing user data and quiz results.
                        </li>
                        <li>
                            <strong>User Friendly:</strong> Flashcard quiz saves all of your names for you, so whenever you need to sign 
                            in with a specific name, you can do so.
                        </li>
                        <li>
                            <strong>The UX/UI:</strong> The UX/UI of the app is eye-catching, and the app is responsive for every screen 
                            above 300 pixels of width size.
                        </li>
                    </ol>

                    <h4>Usage</h4>
                    <ol>
                        <li>
                            <strong>User Authentication:</strong> Enter your name to start taking quizzes.
                        </li>
                        <li>
                            <strong>Topic Selection:</strong> Choose a topic from the available options to begin the quiz.
                        </li>
                        <li>
                            <strong>Quiz Interface:</strong> Navigate through the quiz using the next and previous buttons to move 
                            between questions.
                        </li>
                        <li>
                            <strong>Answer Selection:</strong> Select the correct answer from the multiple-choice options provided for 
                            each question.
                        </li>
                        <li>
                            <strong>Timer: </strong>Keep track of the remaining time during the quiz. If time runs out, only correct 
                            answers amongst attempted questions are considered.
                        </li>
                        <li>
                            <strong>Quiz Completion:</strong> After completing the quiz, the interface is blurred, and the result is shown.
                        </li>
                        <li>
                            <strong>Retake Quiz:</strong> Users can retake quizzes by navigating back to the topic selection page.
                        </li>
                    </ol>

                    <h4>Installation</h4>
                    <ol>
                        <li>Clone or download the Flashcard Quiz repository from <a rel="noreferrer" href="https://github.com/MaitisamY/flashcard-quiz" target={'_blank'}>GitHub</a>
                        </li>
                        <li>Navigate to the project directory.</li>
                        <li>Run <code>npm install</code> to install dependencies.</li>
                        <li>Run <code>npm run dev</code> to start the development server.</li>
                        <li>Open the provided URL in a web browser to access the application.</li>
                    </ol>

                    <h4>Live Demo</h4>
                    <p>Check out the live version of the project <a rel="noreferrer" href="https://flashcard-quiz-blush.vercel.app" target={'_blank'}>here</a></p>

                    <h4>Support</h4>
                    <p>For any inquiries or support requests, please reach out to me through <a rel="noreferrer" href="mailto:m.aitisamyaseen@gmail.com" target={'_blank'}>Email</a>.</p>

                    <h4>Note</h4>
                    <p>This project is open-source and does not include a license. Users are free to use and modify the code according to their requirements.</p>
                    <h5>Happy coding!</h5>
                </>
            </div>
        </div>
    )
}

Terms.propTypes = {
    handleTermsSubmit: PropTypes.func,
    handleOutsideClick: PropTypes.func
}

export default Terms