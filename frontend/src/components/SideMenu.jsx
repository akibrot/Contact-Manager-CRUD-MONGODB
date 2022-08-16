import React from 'react'
import './SideMenu.scss'
import {Link } from 'react-router-dom'
function SideMenu() {
    return (
        <div className="menu">
        <div className="menus"><Link to="/"> All Contact</Link></div>
        <div className="menus"><Link to="/create">Creact Contact</Link></div>
        <div className="menus"><Link to="/fav">Favorite Contacts</Link></div>
        <div className="menus"></div>
    </div>
    )
}

export default SideMenu
