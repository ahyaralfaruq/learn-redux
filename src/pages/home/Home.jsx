import React from 'react'
import { Navbar , Card } from '../../components'
import {useSelector} from 'react-redux'


import './style.css'

const Home = () => {

    const getDataCards = useSelector(state => state.cards.cards)
    console.log(getDataCards)

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
