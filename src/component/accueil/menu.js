import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import './menu.css'
const Menu = () => {
    return (
        <Fragment>
            <Nav.Link href="#features">Forum</Nav.Link>
            <Nav.Link href="#pricing">Profil</Nav.Link>
        </Fragment>
    )
}

export default Menu