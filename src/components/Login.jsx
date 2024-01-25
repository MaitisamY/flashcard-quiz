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

    

    return (
        <div id="login">
            <div id="intro">
                <img alt="Icon of flashcard quiz app" src={Icon} width={100} />
                <h1>Flashcard Quiz</h1>
            </div>
            <form id="name-getter" onSubmit={handleNameSubmit}>
                <label>
                  Enter your name
                  <input type="text" name="name" value={user} onChange={handleUsenameChange} />
                </label>
                {userNameError && <p>{userNameError}</p>}
                <button type="submit">Submit</button>
                <a onClick={handleTermsSubmit}>Terms of use</a>
            </form>
            <p id="fixed-footer">
               ⓒ {new Date().getFullYear()}, Flashcard Quiz
            </p>
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
    )
}