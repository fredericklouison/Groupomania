import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {setCurrentUser} from './store/action/userAction'
import{ BrowserRouter, Route , Switch} from'react-router-dom'
import Accueil from './component/accueil/accueil';
import UserInterface from './component/userInterface/userInterface';
import ProtectedRoutes from './protectedRoutes'

import ProtectedHome from './protectedHome';


const App =({currentuser,IsAuthenticated,setCurrentUser})=> {
    useEffect(()=>{
        setCurrentUser()
    },[setCurrentUser])
        return (
            <BrowserRouter>
                <Switch>
                    <ProtectedHome exact path='/' component={Accueil}></ProtectedHome>
                    <ProtectedRoutes exact path='/interface/' component={UserInterface}></ProtectedRoutes>
                </Switch>
            </BrowserRouter>
        )
    
}
const mapStateToProps=({currentuser,IsAuthenticated,error})=>{
    return{
       currentuser,
       IsAuthenticated,
       error
    }
}
const mapDispathToProps=(dispatch)=>{
    return({
        setCurrentUser:()=>{dispatch(setCurrentUser())}
    })
}
export default connect(mapStateToProps,mapDispathToProps)(App)