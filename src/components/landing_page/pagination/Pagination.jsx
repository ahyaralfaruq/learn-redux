import React from 'react'
import ReactPaginate from 'react-paginate'
import {Link} from 'react-router-dom'

import './style.css'

const Pagination = ({paginate,pageCount}) => {

    return (
        <div className="paginator">
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={paginate}
                pageRangeDisplayed={5}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel="< prev"
                renderOnZeroPageCount={null}
                containerClassName={"pagination-wrapper"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
            />
        </div>
    )
}

export default Pagination
