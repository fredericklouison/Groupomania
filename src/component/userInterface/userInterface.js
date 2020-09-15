import React, { Component,Fragment } from 'react'
import Header from '../accueil/header'
import Profil from './profil/profils'

class UserInterface extends Component {
    render () {
        return (
            <Fragment>
                <Header menu={true} />
                <Profil />
            </Fragment>
        )
    }
}

export default UserInterface