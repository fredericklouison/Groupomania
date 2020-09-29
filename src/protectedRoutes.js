import React,{useEffect} from 'react'
import{ Route,Redirect} from'react-router-dom'
import {setCurrentUser} from './store/action/userAction'
import Auth from './auth.service'
import {connect} from 'react-redux'


const ProtectedRoutes = ({component:Component,IsAuthenticated,currentuser,Pathname,...rest}) => {
    if(Auth.IsAuthenticated(IsAuthenticated)&&currentuser!==(''||undefined)){
        return (
            <Route {...rest} component={
                Component 
            }/>
        )
    }else{
        return(
            <Redirect to={
                {
                    pathname:Pathname
                    
                }
            }/>
        )
    }
    
}
const mapStateToProps=({userReducer})=>{
    return{
        currentuser:userReducer.currentuser,
       IsAuthenticated:userReducer.IsAuthenticated
    }
}

export default connect(mapStateToProps)( ProtectedRoutes)