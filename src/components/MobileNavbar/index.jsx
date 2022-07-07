import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const MobileNavbar = () => {
    return (
        <div id='MobileNavbar'>
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

export default MobileNavbar