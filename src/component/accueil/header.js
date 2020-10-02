import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import {userLogout} from '../../store/action/userAction'
import './header.css'
import Menu from './menu'
const  logo = require('../../images/logo.png')


const Header = ({userLogout,menu}) => {
    const handleClick=()=>{
        userLogout()
        localStorage.removeItem('token')
        window.location.replace("http://localhost:3000/")
    }
    return (
        
           <Fragment>
               <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
                    <Navbar.Brand href="#home"><img className="navbar-brand"src={logo} id='logo'alt='hello'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {menu?<Menu />:null}
                    </Nav>
                    <Nav className="mr-auto">
                        {menu?<Button id='deconexion'variant="danger"onClick={handleClick}>Deconnexion</Button>:null}
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
           </Fragment>
           
    )
}

const mapDispathToProps=(dispatch)=>{
    return({
        userLogout:()=>{dispatch(userLogout())}
    })
}
export default connect(null,mapDispathToProps)(Header)