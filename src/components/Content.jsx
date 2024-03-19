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

    // const gotoMyPortfolio = () => {
    //     window.open("https://github.com/MaitisamY/", "_blank");
    // }

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
                <h1><a href="/">Flashcard <span className="theme-intruder">Q</span>uiz</a></h1>
                <div></div>
              <ul>
                { 
                    handleLeaveQuiz ? 
                    <li title="Leave Quiz"><a onClick={handleLeaveQuiz}><BsBoxArrowUpRight size={25} /></a></li> 
                    : subject ? 
                    <li title={subject}>{subject}</li>
                    :
                    <>
                        <li title="Info"><a onClick={handleInfoClick}><BsQuestionLg size={25} /></a></li>
                        <li className="margin-left" title="Logout"><a onClick={handleLogout}><BsBoxArrowRight size={25} /></a></li>
                    </>
                }
              </ul>
            </header>
            <main>
                <div className="heading-container">
                    {greeting && greeting}
                    {heading && heading}
                </div>
                {children && children}
            </main>
            <footer>
                <p>&copy; {new Date().getFullYear()}, Flashcard Quiz</p>
                {/* <span>Made with ❤️ by 
                    <a target="_blank" rel="noopener noreferrer" onClick={gotoMyPortfolio}> Aitisam Yaseen</a>
                </span> */}
            </footer>
        </>
    )
}