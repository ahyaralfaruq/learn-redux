import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Navbar = () => {
    return (
        <nav className="nav-root">
            <ul className="nav-menu">
                <li className="nav-logo">
                    <Link to="/">
                        Navbar
                    </Link>
                </li>
                <li className="nav-search">
                    <div className="input-inline">
                        <input type="text" placeholder="Cari disini" />
                        <button>X</button>
                    </div>
                </li>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/cards">
                        Cards
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
