import Card from "../../components/Card";
import "./HomePage.scss";
import countries from "../../data/counties";
import Header from "../../components/Header/Header";
import { Component } from "react";

class HomePage extends Component {

  state = {
    
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="cards-container">
          {countries.map((country) => {
            return <Card key={country.id} {...country} />;
          })}
        </div>
      </div>
    );
  }

};

export default HomePage;
