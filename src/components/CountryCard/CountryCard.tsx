import "./CountryCard.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import ReactWebMediaPlayer from "react-web-media-player";
import countryVideo from "../../assets/video/ukraine.mp4";
import WidgetsBox from "../WidgetsBox";
import titleVideo from "../../assets/imgs/title-video.png";
import CountryMap from "../CountryMap/Map";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import renderSlider from './Slider/Slider'
import dataCarousel from "../../data/dataSlider";
import ReactPlayer from "react-player"


interface Country{
  id: string,
  capital: string,
  description: string,
  name: string,
  capitalLocation: {
  coordinates: Array<string>,
  type: string
  },
  imageUrl: string,
  ['videoUrl ']: string,
  currency: string,
  ISOCode: string,
  places: []
  }

interface Props {
  match?: {
    params: { id: string }
  },
}

const CountryCard = ({match}:Props):React.ReactElement => {

  const[country,setCountry] = useState({name: '', description: '',imageUrl: '',capitalLocation:{
      coordinates: []
    },
    ['videoUrl '] : ''
  });
  const [video, setVideo] = useState('')
  useEffect(()=> {
    axios.get(`http://localhost:3000/countries/${match?.params?.id}`)
    .then(({data})=>setCountry(data)
    )
  },[])
  console.log(match)
  console.log(country.capitalLocation.coordinates)
  console.log(country["videoUrl "])


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
      <Carousel
        infiniteLoop={true}
        showThumbs={true}
        width="50%"
        showStatus={false}
      >
        {renderSlider(dataCarousel)}
      </Carousel>
      <div className='country-wrapper--video-map'>
        <div className="country-video">
          <div className="country-description">Video about country!!!</div>
          <ReactPlayer
            url={country["videoUrl "]}
          />
{/*          <ReactWebMediaPlayer video={countryVideo} thumbnail={titleVideo} />*/}
        </div>
          <CountryMap lat={country.capitalLocation.coordinates[0]} lng={country.capitalLocation.coordinates[1]}/>
      </div>
    </div>
  );
};


export default withRouter(CountryCard);