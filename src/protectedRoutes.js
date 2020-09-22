import React from 'react'
import{ Route,Redirect} from'react-router-dom'
import Auth from './auth.service'
import {connect} from 'react-redux'


const ProtectedRoutes = ({component:Component,IsAuthenticated,currentuser,...rest}) => {
    if(Auth.IsAuthenticated(IsAuthenticated)&&currentuser!==undefined){
        return (
            <Route {...rest} component={
                Component 
            }/>
        )
    }else{
        return(
            <Redirect to={
                {
                    pathname:'/'
                    
                }
            }/>
        )
    }
    
}
const mapStateToProps=({currentuser,IsAuthenticated})=>{
    return{
       currentuser,
       IsAuthenticated
    }
}

export default connect(mapStateToProps)( ProtectedRoutes)