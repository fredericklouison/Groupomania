import React from 'react'
import{ Route,Redirect} from'react-router-dom'
import Auth from './auth.service'
import {connect} from 'react-redux'


const ProtectedHome = ({component:Component,IsAuthenticated,currentuser,Pathname,...rest}) => {
    if(Auth.IsAuthenticated(IsAuthenticated)&&currentuser!=(''||undefined)){
        return(
            <Redirect to={
                {
                    pathname:Pathname
                    
                }
            }/>
        )
    }else{
        return (
            <Route {...rest} component={
                Component 
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

export default connect(mapStateToProps)( ProtectedHome)