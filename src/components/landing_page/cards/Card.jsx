import React from 'react'
import {Link} from 'react-router-dom'

import './style.css'

const Card = () => {
    
    return (
        <div className="card-wrapper">
            <Link to="/" className="fullfield-link">
                <div className="card-flex">
                    <div className="card-img">
                        <img src="http://images6.fanpop.com/image/photos/41900000/Itachi-akatsuki-41946320-690-690.jpg" alt="..." className="img-responsive" />
                    </div>
                    <div className="card-content">
                        <h4 className="title" title="Uchiha Itachi">
                            Uchiha Itachi
                        </h4>
                        <p>Level</p>
                        <p>Type</p>
                        <p>Attack</p>
                        <p>Defence</p>
                        <p>price market</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card
