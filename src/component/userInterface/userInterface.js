import React, { Fragment } from 'react'
import Header from '../accueil/header'
import Profil from './profil/profils'

const UserInterface =()=>{
    
        return (
            <Fragment>
                <Header menu={true} />
                <Profil />
            </Fragment>
        )
}


export default UserInterface