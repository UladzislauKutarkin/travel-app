import CountryCard from "../../components/CountryCard/CountryCard";
import countries from '../../data/counties'
import './CountryPage.scss'


const CountryPage = (props) => {
 
  const country = countries.find((current) => (current.country === props.match.params.country));
  console.log(country);
  
    return (<div className="country_page">
       <CountryCard/>
    </div>)
}
  
export default CountryPage;