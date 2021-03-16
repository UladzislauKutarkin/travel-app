import './Card.scss';
import { withRouter } from 'react-router-dom';
import React from 'react';

interface Props {
    match: {
        params: { id: string },
        url: string,
    },
    name: string,
    capital: string,
    history: { push: (url: string) => void },
    id: string,
    imageUrl: string,
    lang:string
    wind:string
}

const Card = ({ name, capital, match, history, id, imageUrl }: Props): React.ReactElement => {
    return (
        <div className="card" onClick={() => {
            history.push(`${match.url}${id}`)
        }
        }>
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} ></div>
            <div className="content">
                <h2 className="title">{name}</h2>
                <span className="subtitle">{capital}</span>
            </div>
        </div>
    )
}
export default withRouter(Card);