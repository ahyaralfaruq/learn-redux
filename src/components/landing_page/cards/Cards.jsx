import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import {setCard} from '../../../Redux/Dispatches/SendCardToReducer'
import Card from './card/Card'
import Pagination from '../pagination/Pagination'
import Loading from '../../Loading'

import './style.css'

const Cards = () => {

    // pagination
    // const [data, setData] = useState([]) ==> udah diganti dengan redux dispatch
    const [offset, setOffset] =  useState(0)
    const [loading, setLoading] = useState(false)
    const [pageCount, setPageCount] =  useState(0) // jumlah halaman
    const [perHal] = useState(100)

    const getDataCards = useSelector(state => state.cardState.cards)
    const dispatch = useDispatch()
    
    const fetchCard = async () => {
        setLoading(true)
        const response = await axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php")
        dispatch(setCard(response.data.data))

        const datas = response.data.data
        setPageCount(Math.ceil(datas.length / perHal))
        setLoading(false)

    }

    useEffect(() => {
        fetchCard()
    },[])

    const currentItems = getDataCards.slice(offset, offset + perHal)
    
    const handlePageClick = (event) => {
        const newOffset = (event.selected * perHal) % getDataCards.length
        setOffset(newOffset)
    };

    return (
        <>
            <section className="content">
                {
                    loading ? <Loading /> : currentItems.map(card => {
                        return <Card key={card.id} kirimDataCard={card} />
                    })
                }
            </section>
            <Pagination paginate={handlePageClick} pageCount={pageCount} />
        </>
    )
}

export default Cards
