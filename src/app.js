import React, { Component } from 'react'
import{ BrowserRouter, Route , Switch} from'react-router-dom'
import Accueil from './component/accueil/accueil';
import UserInterface from './component/userInterface/userInterface';

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Accueil}></Route>
                    <Route exact path='/interface/' component={UserInterface}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App