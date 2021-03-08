import CountryCard from "../../components/CountryCard/CountryCard";
import WidgetsBox from "../../components/WidgetsBox";
import countries from '../../data/counties'
import './CountryPage.scss'


const CountryPage = () => (
    <div className = "country_page">
        <CountryCard/>
        <div className = "country_page__container">
const CountryPage = (props) => {
  
  const country = countries.find((current) => (current.country === props.match.params.country));
  console.log(country);
  
    
    return (<div className="country_page">
        <h1>CountryPage</h1>
        <div className="country_page__container">
            <WidgetsBox />
        </div>
    </div>)
}
  
export default CountryPage;