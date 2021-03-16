import Card from "../../components/Card";
import "./HomePage.scss";
import countries from "../../data/counties";
import Header from "../../components/Header/Header";
import { Component } from "react";
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
  feelsLike:string;
  wind:string;
  humidity:string;
  localTime:string;
  coordin: [];
}

class HomePage extends Component {
  state = {
    countries: [],
    search: '',
    showSearch: true,
    language: ''
  }


  componentDidMount() {
    this.setLanguage()
    this.getCountries();
    this.setState({ countries: countries });
    console.log(this.state.language)

  }

getCountries = () => {
  axios
      .get<Country[]>(`http://localhost:3000/countries?lang=${this.state.language}`)
      .then(({ data }) => this.setState({ countries: data }));
 
}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.language !== this.state.language) {
      this.getCountries();
      console.log(this.state.language)
      console.log(countries)
    }
  }

  setLanguage= ()=>{
    if(localStorage.getItem('languag') ===''){
      this.setState({
        language : 'en'
      });
    } else {
      this.setState({
        language : localStorage.getItem('languag')
      });
    }
    }

  setLng = (event) => {
    localStorage.setItem('languag', event.target.value);
    this.setState({
      language: localStorage.getItem('languag')
    })
  };


  changeHandler = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { countries, search } = this.state;
    const description = countries.map(({headerDescription})=> headerDescription)
    const searchLine = countries.map(({search})=> search)
    const searchPlaceHolder = countries.map(({searchPlaceholder})=> searchPlaceholder)
    const languageLine = countries.map(({language})=> language)
    console.log(languageLine)
    const filtered_countries = countries.filter((c) => {
      return (
        String(c["name"]).toLowerCase().includes(search.toLowerCase()) ||
        String(c["capital"]).toLowerCase().includes(search.toLowerCase())
      );
    });
    return (

      <div className="container-fluid">
        <ScrollUpButton AnimationDuration={1000} 
        style={{ 
        backgroundColor: '##c0c0c000',
        border: '0px solid black',
        right: '16px',
        zIndex: '1',
        boxShadow: '#ffffff6b 0px 1px 10px'}} />
        <Header
            language={this.state.language}
            languageLine={languageLine}
            searchline={searchLine}
            placeHolder={searchPlaceHolder}
            discription={description}
            setLng={this.setLng}
            showSearch={this.state.showSearch}
            search={this.state.search}
            changeHandler={this.changeHandler} />
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
                polygon: { nb_sides: 6, 
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
          {countries.length &&
            filtered_countries.map(({ id, name, capital, imageUrl, headerDescription, wind}) => {
              return (
                <Card
                  headerDescription={headerDescription}
                  lang={this.state.language}
                  key={id}
                  id={id}
                  name={name}
                  capital={capital}
                  imageUrl={imageUrl}
                  wind={wind}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default HomePage;
