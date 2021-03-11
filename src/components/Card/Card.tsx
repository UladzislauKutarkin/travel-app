import './Card.scss';
import { withRouter } from 'react-router-dom';
import React from 'react';

interface Props {
    match: {
      params: { id: string},
      url: string,
    },
    name: string,
    capital: string,
    history: { push: (url: string)=> void},
    id: string,
}

const Card = ({name,capital,match,history,id}: Props):React.ReactElement => {
    return (
        <div className="card brd" onClick={() => {
           history.push(`${match.url}${id}`)
        }
        }>
            <div className='card-photo'></div>
            {/* style = {{ backgroundImage: `url(${props.promo_photo_url})`} */}
            <h4 className='card-name'>{name}</h4>
            <h2 className='card-country'>{capital}</h2>

        </div>
    )
}
export default withRouter(Card);