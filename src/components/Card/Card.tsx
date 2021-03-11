import './Card.scss';
import { withRouter } from 'react-router-dom';

const Card = (props: any) => {
    return (
        <div className="card" onClick={() => {
           props.history.push(`${props.match.url}${props.country}`)
        }
        }>  
            <div className='card-photo'></div>
            {/* style = {{ backgroundImage: `url(${props.promo_photo_url})`} */}
            <h4 className='card-name'>{props.capital}</h4>
            <h2 className='card-country'> {props.country}</h2>
        </div>
    )
}
export default withRouter(Card);