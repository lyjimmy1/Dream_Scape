import React from 'react';
import './Footer.css'
import {FaLinkedin, FaGithub} from 'react-icons/fa'

function Footer(){
    return(
        <footer className="footerContainer">
            <div className="jimmy-container">
                <a className="jimmy"href="https://github.com/lyjimmy1" target="_blank">Jimmy Ly</a>
                <a className="jimmy"href="https://github.com/lyjimmy1" target="_blank">
                    <FaGithub className="footIcon"/>
                </a>
                <a href="https://www.linkedin.com/in/jimmy-ly-22b925134/" target="_blank">
                    <FaLinkedin className="footIcon"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer
