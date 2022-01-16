import React, {useEffect} from 'react'
import { Navbar , Card } from '../../components'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import {setCard} from '../../Redux/Dispatches/SendCardToReducer'


import './style.css'

const Home = () => {

    const getDataCards = useSelector(state => state.cards.cards)
    const dispatch = useDispatch()
    
    const fetchCard = async () => {
        const response = await axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php").catch(err => {
            console.log(err)
        })
        dispatch(setCard(response.data.data))
    }

    useEffect(() => {
        fetchCard()
    },[])

    return (
        <>
            <Navbar />
            <section className="content">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </>
    )
}

export default Home
