import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {setCurrentUser} from './store/action/userAction'
import{ BrowserRouter, Route , Switch} from'react-router-dom'
import Accueil from './component/accueil/accueil';
import UserInterface from './component/userInterface/userInterface';
import ProtectedRoutes from './protectedRoutes'

import ProtectedHome from './protectedHome';
import Forum from './component/forum/forum';


const App =({currentuser,IsAuthenticated,userReducer,setCurrentUser})=> {
    useEffect(()=>{
        setCurrentUser()
    },[setCurrentUser])
        return (
            <BrowserRouter>
                <Switch>
                    <ProtectedHome exact path='/' component={Accueil}></ProtectedHome>
                    <ProtectedRoutes exact path='/Forum' component={Forum} Pathname='/Forum'></ProtectedRoutes>
                    <ProtectedRoutes exact path='/interface' component={UserInterface} Pathname='/interface'></ProtectedRoutes>
                    
                </Switch>
            </BrowserRouter>
        )
    
}
const mapStateToProps=({userReducer,postReducer})=>{
    return{
       currentuser:userReducer.currentuser,
       IsAuthenticated:userReducer.IsAuthenticated,
       error:userReducer.error,
       postReducer
    }
}
const mapDispathToProps=(dispatch)=>{
    return({
        setCurrentUser:()=>{dispatch(setCurrentUser())}
    })
}
export default connect(mapStateToProps,mapDispathToProps)(App)