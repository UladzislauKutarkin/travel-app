import React from 'react';
import './footer.scss'
import { Link } from "react-router-dom";
import githubIcon from '../../assets/imgs/github.png'
import rsSchoolLogo from '../../assets/imgs/rs_school.svg'
import { BrowserRouter } from 'react-router-dom';


export default function Footer() {
    return (
        <BrowserRouter>
            <footer className='wrapper-footer'>
                <div className='footer-git'>
                    <Link to={{ pathname: "https://github.com/UladzislauKutarkin" }} target="_blank">
                        <img className='img-Git'
                            alt='GitHubLogo'
                            src={githubIcon} />
                    </Link>
                    <Link to={{ pathname: "https://github.com/AlekseyGrimm" }} target="_blank">
                        <img className='img-Git'
                            alt='GitHubLogo'
                            src={githubIcon} />
                    </Link>
                    <Link to={{ pathname: "https://github.com/yauheni-beiduk" }} target="_blank">
                        <img className='img-Git'
                            alt='GitHubLogo'
                            src={githubIcon} />
                    </Link>
                    <Link to={{ pathname: "https://github.com/ya6" }} target="_blank">
                        <img className='img-Git'
                            alt='GitHubLogo'
                            src={githubIcon} />
                    </Link>
                </div>
                <span className='footer-year'><strong>2021</strong></span>
                <Link to={{ pathname: "https://rs.school/js/" }} target="_blank">
                    <img className='img-School'
                        alt='RsSchoolLogo'
                        src={rsSchoolLogo} />
                </Link>
            </footer>
        </BrowserRouter>
    )

}