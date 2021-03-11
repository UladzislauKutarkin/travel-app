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
                        <img className='footer-img'
                            alt='GitHubLogo'
                            src={githubIcon} />
                    </Link>
                    <Link to={{ pathname: "https://github.com/UladzislauKutarkin" }} target="_blank">
                        <img className='footer-img'
                            alt='GitHubLogo'
                            src={githubIcon} />
                    </Link>
                    <Link to={{ pathname: "https://github.com/UladzislauKutarkin" }} target="_blank">
                        <img className='footer-img'
                            alt='GitHubLogo'
                            src={githubIcon} />
                    </Link>
                    <Link to={{ pathname: "https://github.com/UladzislauKutarkin" }} target="_blank">
                        <img className='footer-img'
                            alt='GitHubLogo'
                            src={githubIcon} />
                    </Link>
                    <span className='footer-year'><strong>2021</strong></span>
                    <Link to={{ pathname: "https://rs.school/js/" }} target="_blank">
                        <img className='footer-img'
                            alt='RsSchoolLogo'
                            src={rsSchoolLogo} />
                    </Link>
                </div>
            </footer>
        </BrowserRouter>
    )

}