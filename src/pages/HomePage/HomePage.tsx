import Card from "../../components/Card";
import "./HomePage.scss";
import Header from "../../components/Header/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Particles from "react-particles-js";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";


interface Country {
  id: string;
  capital: string;
  description: string;
  name: string;
  capitalLocation: {
    coordinates: string[];
    type: string;
  };
  imageUrl: string;
  videoUrl: string;
  currency: string;
  ISOCode: string;
  places: [];
  search: string;
  searchPlaceholder: string;
  headerDescription: string;
  language: string;
  feelsLike: string;
  wind: string;
  humidity: string;
  localTime: string;
  coordin: [];
}

const HomePage= ()=> {
  const [countries, setCountries] = useState<any>([]),
      [search, setSearch]= useState(''),
      [input, setInput] = useState(''),
      [showSearch, setShowSearch]= useState(true),
      [lang, setLang] = useState<string|null>(localStorage.getItem('languag'));
      const [isDataFetched, setDataFetched] = useState(false)


useEffect(()=>{
    getLanguages();
    getCountries();
    console.log(countries[0])
}, [isDataFetched, lang])



  const getCountries = () => {
    axios
      .get<Country[]>(`http://localhost:3000/countries?lang=${lang}`)
      .then(({ data }) => setCountries(data)).then(()=> setDataFetched(true))
  }



  const getLanguages = ()=>{
    if(localStorage.getItem('languag') ===''){
      setLang('en');
    } else {
      setLang(localStorage.getItem('languag'))
    }
    }

  const setLng = (event) => {
    localStorage.setItem('languag', event.target.value);
    setLang(localStorage.getItem('languag'))
  };


  const changeHandler = (e) => {
    setInput(e.target.value)
  };


  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearch(input)
    }
  };

  const onClickSearchHandler = (e) => {
    setSearch(input)
  };



    const filtered_countries = countries.filter((c) => {
      return (
        String(c["name"]).toLowerCase().includes(search.toLowerCase()) ||
        String(c["capital"]).toLowerCase().includes(search.toLowerCase())
      )});
    const countryCardMap =(countries)=> {
      return countries.length && filtered_countries.map(({ id, wind,capital,
              name, language,imageUrl}) => {
        return (
            <Card
                lang={language}
                key={id}
                id={id}
                name={name}
                capital={capital}
                imageUrl={imageUrl}
                wind={wind}
            />
        );
      })}
      if(countries.length===0){
        return null
      }
    return (
      <div className="container-fluid">
        <ScrollUpButton AnimationDuration={1000}
          style={{
            backgroundColor: '##c0c0c000',
            border: '0px solid black',
            right: '16px',
            zIndex: '1',
            boxShadow: '#ffffff6b 0px 1px 10px'
          }} />
        <Header
            lang={lang}
            props={countries}
          setLng={setLng}
          showSearch={showSearch}
          search={search}
          input={input}
          changeHandler={changeHandler}
          onClickSearchHandler={onClickSearchHandler}
          handleKeyPress={handleKeyPress} />
        <Particles
          className="particles-js"
          params={{
            particles: {
              number: {
                value: 50,
                density: { enable: true, value_area: 552.4033491425909 },
              },
              color: { value: "#ffffff" },
              shape: {
                type: "circle",
                stroke: { width: 0, color: "#201c1c" },
                polygon: {
                  nb_sides: 6,
                },

              },
              opacity: {
                value: 0.5,
                random: false,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
              },
              size: {
                value: 4.004324670644295,
                random: true,
                anim: { enable: false, speed: 10, size_min: 0.1, sync: false },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,

              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true,
              },
              modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
              },
            },
            retina_detect: true,
          }}>
        </Particles>
        <div className="cards-container">
          {countryCardMap(countries)}
        </div>
      </div>
    );
}

export default HomePage;
