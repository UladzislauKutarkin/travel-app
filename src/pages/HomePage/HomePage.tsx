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
    showSearch: true,
    language: 'en'
  }


  componentDidMount() {
    this.setState({ countries: countries });
    axios
      .get<Country[]>(`http://localhost:3000/countries?lang=${this.state.language}`)
      .then(({ data }) => this.setState({ countries: data }));
  }

  setLng = (event) => {
    this.setState({
      language: event.target.value
    })
  };

  changeHandler = (e) => {
    this.setState({ search: e.target.value });
  };



  render() {

    const { countries, search } = this.state;

    const filtered_countries = countries.filter(c => {
      return String(c['name']).toLowerCase().includes(search.toLowerCase()) || String(c['capital']).toLowerCase().includes(search.toLowerCase())
    });


    return (
      <div className="container-fluid">
        <Header
            setLng={this.setLng}
            showSearch={this.state.showSearch}
            search={this.state.search}
            changeHandler={this.changeHandler} />
        <div className="cards-container">
          {countries.length && filtered_countries.map(({ id, name, capital, imageUrl }) => {

              return <Card key={id}
                           lang={this.state.language}
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
