import Card from '../../components/Card';
import './HomePage.scss';
const HomePage = (props: { countries: any[] }) => (
    <div className="homepage">
        <h1>Homepage</h1>
        {
         props.countries.map((country) => {
            console.log(country)
            return <Card key = {country.id} />;
         }
         )

        }



    </div>
)

export default HomePage;