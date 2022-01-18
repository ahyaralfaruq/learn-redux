import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import {setCard} from '../../../Redux/Dispatches/SendCardToReducer'
import Card from './card/Card'
import Pagination from '../pagination/Pagination'

import './style.css'

const Cards = () => {

    // pagination
    // const [data, setData] = useState([])
    // const [loading, setLoading] = useState(false)
    const [halSaatIni, setHalSaatIni] =  useState(1)
    const [dataPerHal,setDataPerHal] = useState(100)

    const getDataCards = useSelector(state => state.cardState.cards)
    const dispatch = useDispatch()
    
    const fetchCard = async () => {
        // setLoading(true)
        const response = await axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php")
        // setData(response.data.data)
        dispatch(setCard(response.data.data))
        // setLoading(false)
    }

    useEffect(() => {
        fetchCard()
    },[])

    // rumus halaman saat ini
    const indexOfLastData = halSaatIni * dataPerHal
    const indexOfFirstData = indexOfLastData - dataPerHal
    const halamanSekarang = getDataCards.slice(indexOfFirstData, indexOfLastData)

    const cekHalNow = (noHalaman) => setHalSaatIni(noHalaman)

    
    const loadingData = () => {
        return <div style={{display:"flex",alignItems:"center",JustifyContent:"center"}}>Loading...</div>
    }

    return (
        <>
            <section className="content">
                {
                    halamanSekarang === 0 ? loadingData : halamanSekarang.map(card => {
                        return <Card key={card.id} kirimDataCard={card} />
                    })
                }
            </section>
            <Pagination dataPerHal={dataPerHal} totalHal={getDataCards.length} paginate={cekHalNow} currentPage={halSaatIni} />
        </>
    )
}

export default Cards
