import React from 'react'
import {Link} from 'react-router-dom'

import './style.css'

const Pagination = ({dataPerHal, totalHal, paginate, currentPage}) => {
    const halno = []

    for (let i = 1; i < Math.ceil(totalHal / dataPerHal); i++) {
        halno.push(i);
        
    }
    

    return (
        <div>
            <ul className="ul-wrapper">
                {
                    // halno > 1 && halno !== 0 ? (
                    //     <li className="li-kotak">
                    //         <Link to="#!" className="link-by" onClick={() => paginate(currentPage - 1)}>
                    //             Prev
                    //         </Link>
                    //     </li>
                    // ) :

                    halno.map(no => (
                        <li key={no} className="li-kotak">
                            <Link to="#!" className="link-by" onClick={() => paginate(no)}>
                                {no}
                            </Link>
                        </li>
                    ))

                    // currentPage < halno && !(currentPage > halno)  ? (
                    //     <li className="li-kotak">
                    //         <Link to="#!" className="link-by" onClick={() => paginate(currentPage - 1)}>
                    //             Prev
                    //         </Link>
                    //     </li>
                    // ) :
                }
            </ul>
        </div>
    )
}

export default Pagination
