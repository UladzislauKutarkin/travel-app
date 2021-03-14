import React from 'react'
import './App.scss';
import {Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import Footer from "./components/Footer/footer";



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path='/:id' component = {CountryPage} />
      </Switch>
      <Footer />
    </div>

  );
}

export default App;