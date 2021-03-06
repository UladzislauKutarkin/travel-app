import './App.scss';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import countries from './data/counties'
import CountryPage from './pages/CountryPage';




function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <HomePage countries={countries} />} />
      <Route exact path='/1' component={CountryPage} />
    </div>
  );
}

export default App;
