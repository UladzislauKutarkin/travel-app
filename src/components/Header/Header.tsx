import React, {useEffect, useState, useCallback} from 'react';
import videoMountain from "../../assets/video/Mountain.mp4";
import '../Header/Header.scss';
import logo from '../../assets/imgs/logo.png.png'
import SearchBox from '../SearchBox';
import {Link} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';


export default function Header (props) {

    const [localState, setLocalState] = useState({
    })

    function renderSearchBox() {
        if (props.showSearch){
            return <SearchBox placeholder='Search country' {...props}/>
        }
    }
    const headerVideoScale= ()=>{
        if (props.showSearch){
            return 'header-video'
        } else {
            return 'cardPageVideo'
        }
    }
    function showLanguage() {
        if (props.showSearch){
           return  props.props[0].language
        } else{
            return props.langLine
        }
    }
    function translation (e){
        if (props.showSearch){
          return  props.setLng(e)
        } else {
        return  props.setFr(e)
        }

    }
    function setLangValue (){
        if (props.showSearch){
            return props.lang
        } else {
            return props.lng
        }
    }

    function renderDescription() {
        if (props.showSearch){
            return <p className='header-param'>{props.props[0].headerDescription}</p>
        } else {
            return null
        }
    }
    return (
        <BrowserRouter>
        <header className='header-wrapper'>
            <video className={headerVideoScale()} autoPlay loop muted preload='true'>
                <source src={videoMountain}/>
            </video>
            <div className='header-main-section-wrapper'>
                {renderSearchBox()}
                <Link to='/' target="_top">
                <img className='header-logo' src={logo} alt="logo"/>
                </Link>
                
                <div className='select-field'>
                    <span className='language_name'>{showLanguage()}</span>
                    <select  value={setLangValue()} onChange = {translation}  className='option-value'>
                        <option className='option-value' value='en'>En</option>
                        <option className='option-value' value='ru'>Ru</option>
                        <option className='option-value' value='fr'>Fr</option>
                    </select>
                </div>
            </div>
            <div className='header-travel-app-description'>
                {renderDescription()}
            </div>
        </header>
        </BrowserRouter>
    );
}
