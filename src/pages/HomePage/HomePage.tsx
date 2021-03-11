import Card from "../../components/Card";
import "./HomePage.scss";
import countries from "../../data/counties";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import { Component } from "react";

class HomePage extends Component {

  state = {
    countries: [],
    search: '',

  }

  componentDidMount() {
    this.setState({ countries: countries });
  }

  setFilteredCards = () => {

  }

  changeHandler = (e) => {

    this.setState({ search: e.target.value });

  }

  render() {

    const { countries, search } = this.state;

    const filtered_countries = countries.filter((c) => (String(c['country']).toLowerCase().includes(search.toLowerCase())));

    //  countries.map(c=>(console.log(String(c['country']).toLowerCase().includes(search))));

    return (
      <div className="container-fluid">
        <Header search={this.state.search} changeHandler={this.changeHandler} />
        <div className="cards-container">
          {filtered_countries.map((country) => {
            return <Card key={country['id']} {...country} />;
          })}
        </div>        
      </div>
    );
  }

};

export default HomePage;
