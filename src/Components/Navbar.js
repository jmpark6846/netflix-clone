import React from 'react'

import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => <header>
    <div className="headerTitle">
        <Link to="/">
            Reflix
        </Link>
        </div>
    <nav>
        <ul>
            <li>영화</li>
            <li>TV프로그램</li> 
        </ul>
    </nav>
</header>

export default Navbar