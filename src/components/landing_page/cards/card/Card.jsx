import React from 'react'
import {Link} from 'react-router-dom'

import './style.css'

const Card = ({ kirimDataCard }) => {

    const {id, card_images, name, level, type, atk, def, card_prices} = kirimDataCard;

    const gambar = card_images[0].image_url
    const hargaPasar = card_prices[0].cardmarket_price

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
                        <p className="sub-title">
                            <b>Level : </b>
                            {level}
                        </p>
                        <p className="sub-title">
                            <b>Type : </b>
                            {type}
                        </p>
                        <p className="sub-title">
                            <b>Attack : </b>
                            {atk}
                        </p>
                        <p className="sub-title">
                            <b>Defence : </b>
                            {def}
                        </p>
                        <p className="sub-title">
                            <b>Price : $</b>
                            {hargaPasar}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card
