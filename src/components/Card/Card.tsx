
import './Card.scss';
import {withRouter} from 'react-router-dom'; 


const Card = (props: any) => {
    return (
        <div className="card brd" onClick = { () => console.log('click')
        }>
            <h4>Card</h4>
           <h2> {props.title}</h2> 

        </div>
    )
}
export default withRouter(Card);