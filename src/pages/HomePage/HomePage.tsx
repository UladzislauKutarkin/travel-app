import Card from "../../components/Card";
import "./HomePage.scss";
import countries from "../../data/counties";
import Header from "../../components/Header/Header";
import { Component } from "react";
import axios from "axios";
import Particles from "react-particles-js";


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
}

class HomePage extends Component {
  state = {
    countries: [],
    search: "",
    showSearch: true,
  };

  componentDidMount() {
    this.setState({ countries: countries });
    axios
      .get<Country[]>("http://localhost:3000/countries")
      .then(({ data }) => this.setState({ countries: data }));
  }

  setFilteredCards = () => {};

  changeHandler = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { countries, search } = this.state;

    const filtered_countries = countries.filter((c) => {
      return (
        String(c["name"]).toLowerCase().includes(search.toLowerCase()) ||
        String(c["capital"]).toLowerCase().includes(search.toLowerCase())
      );
    });

    return (
      <div className="container-fluid">
        <Header
          showSearch={this.state.showSearch}
          search={this.state.search}
          changeHandler={this.changeHandler}
        />
  <Particles
          className="particles-js"
          params={{
            particles: {
              number: {
                value: 142,
                density: { enable: true, value_area: 552.4033491425909 },
              },
              color: { value: "#ffffff" },
              shape: {
                type: "circle",
                stroke: { width: 0, color: "#201c1c" },
                polygon: { nb_sides: 6 },
                image: { src: "", width: 170, height: 140 },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
              },
              size: {
                value: 4.004324670644295,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
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
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
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
            filtered_countries.map(({ id, name, capital, imageUrl }) => {
              return (
                <Card
                  key={id}
                  id={id}
                  name={name}
                  capital={capital}
                  imageUrl={imageUrl}
                />
              );

            })}
        </div>
      </div>
    );
  }
}

export default HomePage;
