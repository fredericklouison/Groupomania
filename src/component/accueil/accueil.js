import React, { Component, Fragment } from 'react'
import Header from './header'
import LogForm from './logForm'
import './accueil.css'
import LogInForm from './logInForm'
const  imgFond = require('../../images/57.jpg')
class Accueil extends Component {
    constructor(props) {
        super(props)
        this.state = {whatForm:false};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this. handleConnect = this. handleConnect.bind(this);
    }   
    
    state = {whatForm:false};
    handleClick(e) {
        e.preventDefault()
        this.setState({whatForm:true});
      }  
      handleConnect(e) {
        e.preventDefault()
        this.setState({whatForm:false});
      }  
    render () {
       
        return (
            <Fragment>
                <Header />
                <main>
                    <img id='fond' src={imgFond}/>
                    {this.state.whatForm?<LogInForm textclick={this.handleConnect}/>:<LogForm textclick={this.handleClick}/>}
                    
                </main>
            </Fragment>
        )
    }
}

export default Accueil