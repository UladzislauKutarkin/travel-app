import React from 'react';
import videoMountain from "../../assets/video/Mountain.mp4";
import '../Header/Header.scss';
import logo from '../../assets/imgs/logo.png.png'
import SearchBox from '../SearchBox';
import {Link} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';



export default function Header (props) {

   // console.log('Header props', props);
    
    function renderSearchBox() {
        if (props.showSearch){
            return <SearchBox placeholder='Search country' {...props}/>
        }
    }

    function translation (e){
        if (props.showSearch){
          return  props.setLng(e)
        } else {
        return  props.setFr(e)
        }

    }


    function renderDescription() {
        if (props.showSearch){
            return <p className='header-param'>{props.discription[0]}</p>
        } else {
            return <p className='header-param'>{props.headerDescription}</p>
        }
    }
   // console.log(props.headerDescription)
//   const   {changeHandler,search } = props;
    return (
        <BrowserRouter>
        <header className='header-wrapper'>
            <video className='header-video' autoPlay loop muted preload='true'>
                <source src={videoMountain}/>
            </video>
            <div className='header-main-section-wrapper'>
                {renderSearchBox()}
                <Link to='/' target="_top">
                <img className='header-logo' src={logo} alt="logo"/>
                </Link>
                <div>
                    <span className=''>Language</span>
                    <select   onChange = {translation} className='option-value'>
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
