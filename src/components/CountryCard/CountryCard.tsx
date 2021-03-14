import "./CountryCard.scss";
import "react-responsive-carousel/lib/styles/carousel.css";
import ReactWebMediaPlayer from "react-web-media-player";
import WidgetsBox from "../WidgetsBox";
import titleVideo from "../../assets/imgs/title-video.png";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from 'react-image-gallery';
import Header from "../Header/Header";
import CountryMap from "../CountryMap";

interface Country{
  id: string,
  capital: string,
  description: string,
  name: string,
  capitalLocation: {
  coordinates: string[],
  type: string
  },
  imageUrl: string,
  videoUrl:string,
  currency: string,
  ISOCode: string,
  places: [],
  slider:[]
  }
interface Props {
  match?: {
    params: { id: string}
  },
  coordinates: string[]
}

const CountryCard = ({match}:Props):React.ReactElement => {

const[country,setCountry] = useState({slider:[] ,capital:'', ISOCode: '',currency: '',name: '', description: '',imageUrl: '',
 videoUrl:'',capitalLocation:{ coordinates:[]}});



  const fetchCountries = async () => {
    const response = await axios.get(`http://localhost:3000/countries/${match?.params?.id}`)
    setCountry(response.data)
  }
  useEffect( () => { fetchCountries() },[])

  const { capital, ISOCode, currency, name, capitalLocation } = country;

  return (
    <div className="country-card">
      <Header/>
      <div className="country-wrapper--description">
        <div className="country-wrapper-desriptions">
          <div className="country-photo--wrapper">
            <img
              className="country-photo"
              src={country.imageUrl}
              alt="Country"
            />
          </div>
          <div className="country-name">{country.name}</div>
          <div className="country-capital">{country.capital}</div>
          <div className="country-description">
            {country.description}
          </div>
        </div>
        <WidgetsBox capital = {capital} ISOCode={ISOCode}  currency ={currency} name = {name}/>
      </div>

      <ImageGallery items={country.slider}/>

      <div className='country-wrapper--video-map'>
        <div className="country-video">
          <div className="country-description">Video about country!!!</div>
          <ReactWebMediaPlayer video={country.videoUrl} thumbnail={titleVideo} />
        </div>
      </div>
      <CountryMap coordinates = {capitalLocation.coordinates} />
    </div>
  );

}


export default withRouter(CountryCard);