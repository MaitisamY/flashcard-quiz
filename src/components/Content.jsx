/* eslint-disable react/prop-types */
import Icon from '../assets/logo.png'
import { BsQuestionLg, BsBoxArrowRight, BsBoxArrowUpRight } from 'react-icons/bs'
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
                            <li>You can re-take the same quiz multiple times.</li>
                            <li>Your latest score will be displayed.</li>
                            <li>Your correct answers will be counted upon time up.</li>
                        </ol>
                    </div>
                    </div>
                )
            }
            <header>
                <img alt="Icon of flashcard quiz app" src={Icon} />
                <div></div>
              <ul>
                { 
                    handleLeaveQuiz ? 
                    <li title="Leave Quiz"><a onClick={handleLeaveQuiz}><BsBoxArrowUpRight size={25} /></a></li> 
                    : subject ? 
                    <li>{subject}</li>
                    :
                    <>
                        <li title="Info"><a onClick={handleInfoClick}><BsQuestionLg size={25} /></a></li>
                        <li className="margin-left" title="Logout"><a onClick={handleLogout}><BsBoxArrowRight size={25} /></a></li>
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