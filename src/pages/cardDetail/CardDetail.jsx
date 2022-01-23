import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CardDetail = () => {
    // const a = useParams() // {cardId: 123123}
    const {cardId} = useParams()

    return (
        <div style={{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <h1 style={{fontFamily:"fantasy"}}>
                Id Card : {cardId}
            </h1>
        </div>
    )
}

export default CardDetail
