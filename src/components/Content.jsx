/* eslint-disable react/prop-types */
import Icon from '../assets/logo.png'
export default function Content({ 
    greeting, 
    heading, 
    subject, 
    handleLogout, 
    handleLeaveQuiz, 
    info,
    handleInfoClick,
    handleOutsideClick,
    children 
}) {
    return (
        <>
            {
                info && (
                    <div id="info" onClick={handleOutsideClick}>
                    <div id="content-with-border">
                        <a onClick={handleInfoClick}>X</a>
                        <h1>Info</h1>
                        <ol>
                            <li>Every quiz is of 10:00 minutes.</li>
                            <li>Refreshing the page will end the quiz.</li>
                            <li>You can take the same quiz multiple times.</li>
                            <li>Your latest score will be displayed.</li>
                        </ol>
                    </div>
                    </div>
                )
            }
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
                    <>
                        <li><a onClick={handleInfoClick}>Info</a></li>
                        <li><a onClick={handleLogout}>Logout</a></li>
                    </>
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