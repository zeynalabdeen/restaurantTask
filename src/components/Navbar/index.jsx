import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div id="Navbar">
            <ul>
                <li>
                    <NavLink activeclassname='active' to="/order">
                        <i class="fa-solid fa-utensils"></i>
                        <span>Sifarişlər</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeclassname='active' to="/">
                        <i class="fa-solid fa-house"></i>
                        <span>Ana Səhifə</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeclassname='active' to="/new-order">
                        <i class="fa-solid fa-bell-concierge"></i>
                        <span>Yeni Sifariş</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar