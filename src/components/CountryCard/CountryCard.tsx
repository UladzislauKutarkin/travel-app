import "./CountryCard.scss";
import WidgetsBox from "../WidgetsBox";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Header from "../Header/Header";
import CountryMap from "../CountryMap";
import ReactPlayer from "react-player";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import Footer from "../Footer/footer";


interface Props {
  match?: {
    params: { id: string };
  };
  coordinates: string[];
}

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return null;
}

const CountryCard = ({ match }: Props): React.ReactElement => {
  const [country, setCountry] = useState({
    headerDescription: "",
    localTime: "",
    coordin: [],
    humidity: "",
    feelsLike: "",
    days: [],
    months: [],
    wind: "",
    slid: [],
    slider: [],
    capital: "",
    ISOCode: "",
    currency: "",
    name: "",
    currenc: "",
    language: "",
    description: "",
    imageUrl: "",
    imgCountry: "",
    videoUrl: "",
    capitalLocation: { coordinates: [] },
  });
  const [lang, setLang] = useState<string | null>(
    ''
  );

  const setFr = (event) => {
    localStorage.setItem("languag", event.target.value);
    setLang(localStorage.getItem("languag"));
  };

  const fetchCountries = async () => {
    const response = await axios.get(
      `https://travel-app-server-epam.herokuapp.com/countries/${match?.params?.id}?lang=${lang}`
    );
    setCountry(response.data);
  };
  const setLanguage = () => {
    const localLanguage = localStorage.getItem("language");
    if (localLanguage === "") {
      localStorage.setItem("language", "en");
    }
  };
  useEffect(() => {
    fetchCountries();
    setLanguage();
  }, [lang]);

  const {
    localTime,
    currenc,
    humidity,
    feelsLike,
    days,
    months,
    wind,
    capital,
    coordin,
    ISOCode,
    currency,
    name,
    capitalLocation,
    headerDescription,
    language,
  } = country;

  return (
    <div className="country-card">
      <ScrollToTopOnMount />
      <ScrollUpButton
        AnimationDuration={1500}
        style={{
          backgroundColor: "#c0c0c045",
          border: "1px solid black",
          zIndex: "5",
          outline: "none",
        }}
      />
      <Header
        headerDescription={headerDescription}
        setFr={setFr}
        langLine={language}
        lng={lang}
      />
      <div className="country-wrapper--description">
        <div className="country-wrapper-desriptions">
          <div className="country-photo--wrapper">
            <img
              className="country-photo"
              src={country.imgCountry}
              alt="Country"
            />
          </div>
          <div className="country-name">{country.name}</div>
          <div className="country-capital">{country.capital}</div>
          <div className="country-description">{country.description}</div>
        </div>

        <WidgetsBox
          currenc={currenc}
          localTime={localTime}
          humidity={humidity}
          feelsLike={feelsLike}
          days={days}
          months={months}
          wind={wind}
          capital={capital}
          ISOCode={ISOCode}
          currency={currency}
          name={name}
        />
      </div>

      <ImageGallery items={country.slid} />

      <div className="country-wrapper--video-and-map">
        <div className="country-wrapper--video-map">
          <div className="country-video">
            <ReactPlayer
              className="react-player"
              controls={true}
              url={country["videoUrl "]}
            />
          </div>
        </div>
        <div className="map-div">
          <CountryMap
            coordin={coordin}
            coordinates={capitalLocation.coordinates}
          />
        </div>
      </div>
      <Footer />
      
    </div>
  );
};

export default withRouter(CountryCard);
