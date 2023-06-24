import React from "react";
import { SiGithub,SiLinkedin } from "react-icons/si";
import resume from "../assets/Salina_resume.pdf"

export default function Header() {
    return (
        <header className="header">
            <div className="flex-wrap">
                <a className="icons" href="https://github.com/slingshort"> <SiGithub /></a>
                <a className="icons" href="https://www.linkedin.com/in/salina-m-a1655111b/"> <SiLinkedin /></a>
            </div>
            <h3>
                {/* <button>Contact me</button> */}
                <button>
                    <a href={resume} download="Salina_resume.pdf">Download my resume</a>
                </button>
            </h3>
        </header>
    )
}