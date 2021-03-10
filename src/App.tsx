import React from 'react'
import './App.scss';
import {Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';

// axios.get('http://localhost:3000/')
// .then((response) => {
//   console.log(response.data);
// });
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path='/:country' component = {CountryPage} />
      </Switch>
    </div>
  );
}

export default App;