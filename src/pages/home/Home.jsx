import React, {useEffect} from 'react'
import { Navbar , Card } from '../../components'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import {setCard} from '../../Redux/Dispatches/SendCardToReducer'


import './style.css'

const Home = () => {

    const getDataCards = useSelector(state => state.cardState.cards)
    const dispatch = useDispatch()
    
    const fetchCard = async () => {
        const response = await axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php")
        dispatch(setCard(response.data.data))
    }

    useEffect(() => {
        fetchCard()
    },[])

    const loadingData = () => {
        return <div style={{display:"flex",alignItems:"center",JustifyContent:"center"}}>Loading...</div>
    }

    return (
        <>
            <Navbar />
            <section className="content">
                {
                    getDataCards !== 0 ? getDataCards.map(card => {
                        return <Card key={card.id} kirimDataCard={card} />
                    }) : loadingData
                } 
            </section>
        </>
    )
}

export default Home
