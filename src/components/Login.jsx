/* eslint-disable react/prop-types */
import { useState } from 'react'
import Icon from '../assets/logo.png'
export default function Login({ 
    userName,
    userNameError,
    terms, 
    handleNameSubmit, 
    handleTermsSubmit, 
    handleOutsideClick 
}) {
    const [user, setUser] = useState(userName);
    
    const handleUsenameChange = (e) => {
        const name = e.target.value;
        setUser(name);
    }

    // const gotoMyPortfolio = () => {
    //     window.open("https://github.com/MaitisamY/", "_blank");
    // }

    return (
        <>
            <div id="login">
                <div id="intro">
                    <h1>Flashcard <span className="theme-intruder">Q</span>uiz</h1>
                </div>
                <form id="name-getter" onSubmit={handleNameSubmit}>
                    <label>Enter your name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={user} 
                        onChange={handleUsenameChange}
                        placeholder="E.g. John Doe"
                    />
                    {userNameError && <p id="name-error">{userNameError}</p>}
                    <button type="submit">Submit</button>
                    <a onClick={handleTermsSubmit}>Terms of use</a>
                </form>
                {terms && (
                    <div id="terms" onClick={handleOutsideClick}>
                        <div id="content">
                            <a onClick={handleTermsSubmit}>X</a>
                            <h1>Terms of use</h1>
                            <ol>
                                <li>Our app requires your name to let you start.</li>
                                <li>Your name will be stored in your own local browser.</li>
                                <li>You can choose to remove your name at any time.</li>
                                <li>We do not collect any personal information.</li>
                                <li>Our app is free to use.</li>
                            </ol>
                        </div>
                    </div>
                )}
            </div>
            <div id="login-footer">
                <p>© {new Date().getFullYear()}, Flashcard Quiz.</p>
                {/* <span>Made with ❤️ by 
                    <a target="_blank" rel="noopener noreferrer" onClick={gotoMyPortfolio}> Aitisam Yaseen</a>
                </span> */}
            </div>
        </>
    )
}