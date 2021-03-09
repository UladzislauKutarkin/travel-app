import './Card.scss';
import { withRouter } from 'react-router-dom';

const Card = (props: any) => {
    return (
        <div className="card" onClick={() => {
           props.history.push(`${props.match.url}${props.country}`)
        }
        }>  
            <div className="card-photo"></div>
            <h4 className='card-name'>Card</h4>
            <h2 className='card-country'> {props.country}</h2>
        </div>
    )
}
export default withRouter(Card);