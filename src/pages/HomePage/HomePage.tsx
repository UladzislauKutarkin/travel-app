import Card from "../../components/Card";
import "./HomePage.scss";
import countries from "../../data/counties";
import Header from "../../components/Header/Header";
import { Component } from "react";
import axios from "axios";

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
    search: '',
    showSearch: true
  }


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
    //usememo
    const { countries, search } = this.state;
    const filtered_countries = countries.filter((c) => (String(c['country']).toLowerCase().includes(search.toLowerCase())));
     countries.map(c=>(console.log(String(c['country']).toLowerCase().includes(search))));

    return (
      <div className="container-fluid">
        <Header showSearch={this.state.showSearch} search={this.state.search} changeHandler={this.changeHandler} />
        <div className="cards-container ">
          {countries.length &&
            countries.map(({ id, name, capital, imageUrl }) => {
              return <Card key={id}
               id={id}
                name={name}
                 capital={capital}
                 imageUrl={imageUrl}
                 />;
            })}
        </div>
      </div>
    );
  }
}

export default HomePage;
