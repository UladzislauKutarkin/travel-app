import "./CountryCard.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import ReactWebMediaPlayer from "react-web-media-player";
import dataCarousel from '../../data/dataSlider'
const ukraine = require ("../../videos/ukraine.mp4");



const renderSlider = (dataCarousel) => {
  return dataCarousel.map(data => {return (<CorouselSlider img={data.imgURL} description={data.description} />)} )
}

const CorouselSlider = ({img,description}) => {
  return(
  <div>
  <img src={img}/>
  <p className="legend">
    {description}
  </p>
  </div>)
}


const CountryCard = () => {
  return (
    <div className="country-card">
      <div className="country-wrapper--description">
        <div>
          <div className="country-photo--wrapper">
            <img
              className="country-photo"
              src="https://www.rae.ma/wp-content/uploads/2019/10/Ukraine-Kiev-vue-place-Independance-1024x742.jpg"
              alt="Country"
            />
          </div>
          <h2>Country Name</h2>
          <h4>Descroption</h4>
        </div>
      </div>
      <Carousel  infiniteLoop={true} width="70%" showStatus={false}>
        {renderSlider(dataCarousel)}
      </Carousel>
      <div className="country-video">
        <ReactWebMediaPlayer title="Video about country" video={ukraine} />
      </div>
    </div>
  );
};

export default CountryCard;
