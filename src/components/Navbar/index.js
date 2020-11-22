import React from 'react';
import {Nav, NavLink, NavIcon, Bars} from './NavbarElements'


const Navbar = ({toggle}) => {
    return(
        <Nav>
        <NavLink to='/'>Döner</NavLink>
        <NavIcon onClick={toggle}>
            <p>Menu</p>
            <Bars/>
        </NavIcon>
        </Nav>
    )
}

export {Navbar} ;