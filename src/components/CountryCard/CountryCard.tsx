import "./CountryCard.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import ReactWebMediaPlayer from "react-web-media-player";

import dataCarousel from "../../data/dataSlider";
import countryVideo from "../../assets/video/ukraine.mp4";
import WidgetsBox from "../WidgetsBox";
import titleVideo from '../../assets/imgs/title-video.png'
const renderSlider = (dataCarousel) => {
  return dataCarousel.map((data) => {
    return <CorouselSlider img={data.imgURL} description={data.description} />;
  });
};

const CorouselSlider = ({ img, description }) => {
  return (
    <div>
      <img src={img} />
      <p className="legend">{description}</p>
    </div>
  );
};


const CountryCard = () => {
  return (
    <div className="country-card">
      <div className="country-wrapper--description">
        <div className="country-wrapper-desriptions">
          <div className="country-photo--wrapper">
            <img
              className="country-photo"
              src="https://www.rae.ma/wp-content/uploads/2019/10/Ukraine-Kiev-vue-place-Independance-1024x742.jpg"
              alt="Country"
            />
          </div>
          <div className="country-name">Country Name</div>
          <div className="country-description">
            Ukraine - Wikipediaen.wikipedia.org › wiki › Ukraine Including
            Crimea, Ukraine has an area of 603,628 km2 (233,062 sq mi), and is
            the second-largest country in Europe after Russia. Excluding Crimea,
            Ukraine has a population of about 41.5 million, making it the
            eighth-most populous country in Europe. Its capital and largest city
            is Kyiv.
          </div>
        </div>
        <WidgetsBox />
      </div>
      <Carousel infiniteLoop={true} showThumbs={true} width="50%" showStatus={false}>
         {renderSlider(dataCarousel)} 
      </Carousel>
      <div className="country-video">
        <div className='country-description'>Video about country!!!</div>
        <ReactWebMediaPlayer  video={countryVideo} thumbnail={titleVideo}/>
      </div>
    </div>
  );
};

export default CountryCard;
