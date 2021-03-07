import React from 'react';
import videoMountain from "../../assets/video/Mountain.mp4";
import '../Header/Header.scss';
import logo from '../../assets/imgs/logo.png.png'


export default function Header () {
    return (
        <header className='header-wrapper'>
            <video autoPlay loop muted preload='true'>
                <source src={videoMountain}/>
            </video>
            <div className='header-main-section-wrapper'>
                <div>
                    <label className='header-search-title' htmlFor='search'>Search</label>
                    <input id='search' placeholder='Search country'></input>
                </div>
                <img className='header-logo' src={logo}/>
                <div>
                    <span className='header-search-title'>Language</span>
                    <select className='option-value'>
                        <option className='option-value' value='En' defaultValue='En'>En</option>
                        <option className='option-value'value='Ru' >Ru</option>
                        <option className='option-value'value='Bel'>Bel</option>
                    </select>
                </div>

            </div>
            <div className='header-travel-app-description'>
                <p className='header-param'>What is a <strong>travel app?</strong>
                    Travel app is the app that helps users find out more about country that he wants to visit.</p>
            </div>
        </header>

    );
}
