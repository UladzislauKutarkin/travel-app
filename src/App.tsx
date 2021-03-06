import './App.scss';
import {Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import countries from './data/counties'
import CountryPage from './pages/CountryPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <HomePage countries={countries} />} />
        <Route exact path='/1' component={CountryPage} />
      </Switch>

    </div>
  );
}

export default App;
