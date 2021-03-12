import "./CountryCard.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import ReactWebMediaPlayer from "react-web-media-player";
import countryVideo from "../../assets/video/ukraine.mp4";
import WidgetsBox from "../WidgetsBox";
import titleVideo from "../../assets/imgs/title-video.png";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original:  "https://wikiway.com/upload/hl-photo/00c/452/kievo-pecherskaya-lavra_130.jpg",
    thumbnail:  "https://wikiway.com/upload/hl-photo/00c/452/kievo-pecherskaya-lavra_130.jpg",
    description: "Киево-Печерская лавра.Легендарный историко-архитектурный объект города Киев. Дата возведения – 1051 год.",
  },
  {
    original: "https://wikiway.com/upload/hl-photo/b06/378/bukovel_124.jpg",
    thumbnail: "https://wikiway.com/upload/hl-photo/b06/378/bukovel_124.jpg",
    description: " Буковель – один из самых известных украинских горнолыжных курортов. Он расположен на высоте более 900 метров рядом с селом Поляница Ивано-Франковской области.",
  },
  {
    original: "https://wikiway.com/upload/hl-photo/e92/be1/chernobylskaya-aes_75.jpg",
    thumbnail: "https://wikiway.com/upload/hl-photo/e92/be1/chernobylskaya-aes_75.jpg",
  },
];
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
  const[country,setCountry] = useState({slider:[] ,name: '', description: '',imageUrl: '', videoUrl:'',capitalLocation:{ coordinates:[]}});



  const fetchCountries = async () => {
    const response = await axios.get(`http://localhost:3000/countries/${match?.params?.id}`)
    setCountry(response.data)
  }
  useEffect( () => { fetchCountries() },[])

 


  console.log(country)

  return (
    <div className="country-card">
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
          <div className="country-description">
            {country.description}
          </div>
        </div>
        <WidgetsBox />
      </div>

      <ImageGallery items={country.slider}/>

      <div className='country-wrapper--video-map'>
        <div className="country-video">
          <div className="country-description">Video about country!!!</div>
          <ReactWebMediaPlayer video={country.videoUrl} thumbnail={titleVideo} />
        </div>
      </div>
    </div>
  );

}



export default withRouter(CountryCard);