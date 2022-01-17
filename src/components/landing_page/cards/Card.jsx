import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

import './style.css'

const Card = ({ kirimDataCard }) => {

    const {id, card_images, name, level, type, atk, def, card_prices} = kirimDataCard;

    const gambar = card_images[0].image_url
    const hargaPasar = card_prices[0].cardmarket_price
    
    // const getCards = useSelector(state => state.cardState.cards)

    return (
        <div className="card-wrapper">
            <Link to={`cards/${id}`} className="fullfield-link">
                <div className="card-flex">
                    <div className="card-img">
                        <img src={gambar} alt="..." className="img-responsive" />
                    </div>
                    <div className="card-content">
                        <h4 className="title" title={name}>
                            {name}
                        </h4>
                        <p>{level}</p>
                        <p>{type}</p>
                        <p>{atk}</p>
                        <p>{def}</p>
                        <p>${hargaPasar}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card
