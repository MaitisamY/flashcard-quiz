/* eslint-disable react/prop-types */
import Icon from '../assets/logo.png'
export default function Content({ greeting, heading, subject, handleLogout, handleLeaveQuiz, children }) {
    return (
        <>
            <header>
                <img alt="Icon of flashcard quiz app" src={Icon} width={80} />
                <div></div>
              <ul>
                { 
                    handleLeaveQuiz ? 
                    <li><a onClick={handleLeaveQuiz}>Leave Quiz</a></li> 
                    : subject ? 
                    <li>{subject}</li>
                    :
                    <li><a onClick={handleLogout}>Logout</a></li>
                }
              </ul>
            </header>
            <main>
                {greeting && greeting}
                {heading && heading}
                {children && children}
            </main>
            <footer>
                <p>ⓒ {new Date().getFullYear()}, Flashcard Quiz</p>
            </footer>
        </>
    )
}