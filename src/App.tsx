import './App.scss';
import HomePage from './pages/HomePage';
import countries from './data/counties'




function App() {
  return (
    <div className="App">
     <HomePage countries = {countries} />
    </div>
  );
}

export default App;
