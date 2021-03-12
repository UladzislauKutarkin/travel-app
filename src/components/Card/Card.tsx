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
    imageUrl: string,
}

const Card = ({name,capital,match,history,id, imageUrl}: Props):React.ReactElement => {
    return (
        <div className="card brd" onClick={() => {
           history.push(`${match.url}${id}`)
        }
        }>
            
            <img className="card-photo" src={imageUrl} alt="card-photo" />           
            <h4 className='card-name'>{name}</h4>
            <h2 className='card-country'>{capital}</h2>

        </div>
    )
}
export default withRouter(Card);