import CountryCard from "../../components/CountryCard/CountryCard";
import WidgetsBox from "../../components/WidgetsBox";
import './CountryPage.scss'

const CountryPage = () => (
    <div className = "country_page">
        <CountryCard/>
        <div className = "country_page__container">
            <WidgetsBox />
        </div>
    </div>

)
export default CountryPage;