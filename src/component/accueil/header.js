import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React, { Fragment } from 'react'
import './header.css'
import Menu from './menu'
const  logo = require('../../images/logo.png')


const Header = (props) => {
    return (
        
           <Fragment>
               <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
                    <Navbar.Brand href="#home"><img className="navbar-brand"src={logo} id='logo'alt='hello'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {props.menu?<Menu />:null}
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
           </Fragment>
           
    )
}

export default Header