import React from 'react'
import{ Route,Redirect} from'react-router-dom'
import Auth from './auth.service'
import {connect} from 'react-redux'


const ProtectedHome = ({component:Component,IsAuthenticated,currentuser,...rest}) => {
    if(Auth.IsAuthenticated(IsAuthenticated)&&currentuser!=undefined){
        return(
            <Redirect to={
                {
                    pathname:'/interface'
                    
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
const mapStateToProps=({currentuser,IsAuthenticated})=>{
    return{
       currentuser,
       IsAuthenticated
    }
}

export default connect(mapStateToProps)( ProtectedHome)