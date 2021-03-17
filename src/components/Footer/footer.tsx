import React from 'react';
import './footer.scss'
import { Link } from "react-router-dom";
import footerPic from '../../assets/imgs/footer-cover.png'
import githubIcon from '../../assets/imgs/github.png'
import rsSchoolLogo from '../../assets/imgs/rs_school.svg'
import { BrowserRouter } from 'react-router-dom';


export default function Footer() {
    return (
        <BrowserRouter>
            <footer className='wrapper-footer' style={{
                backgroundImage: `url(${footerPic})`
            }}>
                <div className='column-wrapper'>
                <div className='footer-git'>
                    <Link style={{ textDecoration: 'none',
                    display: 'flex', alignContent: 'center',
                        alignItems: 'center',
                        marginRight: '20px'
                    }} to={{ pathname: "https://github.com/UladzislauKutarkin" }} target="_blank">
                        <img className='img-Git'
                            alt='GitHubLogo'
                            src={githubIcon} />
                        <span className='git_name'>UladzislauKutarkin</span>
                    </Link>
                    <Link style={{ textDecoration: 'none',
                        display: 'flex', alignContent: 'center',
                        alignItems: 'center',
                        marginRight: '20px'}} to={{ pathname: "https://github.com/AlekseyGrimm" }} target="_blank">
                        <img className='img-Git'
                            alt='GitHubLogo'
                            src={githubIcon} />
                        <span className='git_name'>AlekseyGrimm</span>
                    </Link>
                    <Link style={{ textDecoration: 'none',
                        display: 'flex', alignContent: 'center',
                        alignItems: 'center',
                        marginRight: '20px'}} to={{ pathname: "https://github.com/yauheni-beiduk" }} target="_blank">
                        <img className='img-Git'
                            alt='GitHubLogo'
                            src={githubIcon} />
                        <span className='git_name'>yauheni-beiduk</span>
                    </Link>
                    <Link style={{ textDecoration: 'none',
                        display: 'flex', alignContent: 'center',
                        alignItems: 'center'}} to={{ pathname: "https://github.com/ya6" }} target="_blank">
                        <img className='img-Git'
                            alt='GitHubLogo'
                            src={githubIcon} />
                        <span className='git_name'>ya6</span>
                    </Link>

                </div>
                    <div className='second-row'>
                        <span className='footer-year'><strong>&copy; 2021</strong></span>
                        <Link to={{ pathname: "https://rs.school/js/" }} target="_blank">
                            <img className='img-School'
                                 alt='RsSchoolLogo'
                                 src={rsSchoolLogo} />
                        </Link>
                    </div>
                </div>
            </footer>
        </BrowserRouter>
    )

}