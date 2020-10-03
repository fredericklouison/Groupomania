
import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Header from '../accueil/header'
import PostDownload from './postdownload'
import SendPost from './postupload'
import {fetchgetAllPost} from '../../store/action/postAction'



const Forum =({fetchgetAllPost,currentuser,post})=>{
    

    useEffect(()=>{
        
        fetchgetAllPost()
      
    },[])
    
    
    const postList=Object.keys(post)
.map(key=>{
 
return<PostDownload key={key}titre={post[key].titre} usersid={post[key].usersid} photo={post[key].photo} photo_user={post[key].photo_user} pseudo={post[key].pseudo} idPost={post[key].idPost} />
})
    
    
        return (
            <Fragment>
                <Header menu={true} />
                <SendPost />
                {postList}
                
                
            </Fragment>
        )
}

const mapStateToProps=({userReducer,postReducer,})=>{
    return{
       currentuser:userReducer.currentuser,
       IsAuthenticated:userReducer.IsAuthenticated,
       error:userReducer.error,
       post:postReducer.post
    }
}
const mapDispathToProps=(dispatch)=>{
    return({
        fetchgetAllPost:()=>{dispatch(fetchgetAllPost())}
    })
}
export default connect(mapStateToProps, mapDispathToProps)( Forum)