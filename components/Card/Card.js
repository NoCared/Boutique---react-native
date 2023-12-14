import './Card.css'
import BoutiqueContext from '../../BoutiqueContext';
import React from 'react';
import BasicButtons from '../BasicButtons/BasicButtons';

const Card = (props) => {
    const boutiqueContext = React.useContext(BoutiqueContext);

    return (
        <div className='cardDisplay'>
            <div className='cardImage'>
                <img src={props.articleInfo.url} alt=""></img>
            </div>
            <h3>{props.articleInfo.name}</h3>
            <p className='cardDescription'>{props.articleInfo.description}</p>
            <p>
                <span className='cardPrice'>
                    {props.articleInfo.price} £
                </span>
                <BasicButtons/>
                <span className='cardQte'>
                    {props.articleInfo.qte} disponibles
                </span>
            </p>
            <button
                onClick={
                    () => {
                        boutiqueContext.qteDecrement(props.articleInfo.id);
                    }}
                disabled={props.articleInfo.qte <= 0 ? true : false}
            >Achat</button>
        </div>
    )
}

export default Card;