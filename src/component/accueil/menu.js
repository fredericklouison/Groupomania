import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import './menu.css'
import { useHistory } from 'react-router-dom'
const Menu = () => {
 const history=useHistory()
    return (
        <Fragment>
            <Nav.Link onClick={()=>{history.push('/Forum')}}>Forum</Nav.Link>
            <Nav.Link onClick={()=>{history.push('/interface')}}>Profil</Nav.Link>
        </Fragment>
    )
}

export default Menu