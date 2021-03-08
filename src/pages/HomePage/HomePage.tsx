import Card from '../../components/Card';
import './HomePage.scss';
import countries from '../../data/counties'

const HomePage = (props) =>{

   console.log(props);
   
    
    return (
        <div className="container-fluid">

        <div className = "header brd">
        <h1>Header</h1>
        </div>

        <div className = "cards-container">

        {
            countries.map((country) => {
                             
                return <Card key={country.id} {...country} />;
            }
            )
        }

        </div>
       
       
    </div>
    );

}



export default HomePage;