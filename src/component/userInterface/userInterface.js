import React, { Component,Fragment } from 'react'
import Header from '../accueil/header'
import Profil from './profil/profils'
import {connect} from 'react-redux'
import {userLogout} from '../../store/action/userAction'

const UserInterface =({userLogout})=>{
    const handleClick=()=>{
        userLogout()
        localStorage.removeItem('token')
       
    }
        return (
            <Fragment>
                <Header menu={true} />
                <Profil />
                <button onClick={handleClick}>logout</button>
            </Fragment>
        )
}

const mapDispathToProps=(dispatch)=>{
    return({
        userLogout:()=>{dispatch(userLogout())}
    })
}
export default connect(null,mapDispathToProps)(UserInterface)