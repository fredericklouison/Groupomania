import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import './postdownload.css'
import UpdatePost from './postUpdate'
import {fetchdeleteOnePost,fetchgetdislikeOnePost,fetchgetLikeOnePost} from '../../store/action/postAction'
import * as APIConfig  from '../../store/constant/ApiConfig'
import Comment from './comment'
const PostDownload = ({fetchdeleteOnePost,photo_user,pseudo,titre,photo,usersid,currentuser,idPost}) => {
  const IsUser=(currentuser.userId==usersid)||currentuser.isAdmin
 
  const [update,setupdate]=useState(true)
  const [like,setuplike]=useState()
  const [userliked,setupliked]=useState()
  const [dislike,setupdislike]=useState()
  const [userdisliked,setupdisliked]=useState()
  const [comm,setcomm]=useState(false)
  const handlecom=()=>{
     if(comm){
       setcomm(false)
     }else{
      setcomm(true)
     }
  }
  const handlelike=()=>{
    fetch(`${APIConfig.API_URI}/Post/like/${idPost}/${currentuser.userId}`,
			{method: 'GET'}).then((response) => {
				if (!response.ok) {
					throw new Error('Error - 404 Not Found')
				}
				return response.json()
			})
			.then((like) => {
			 setuplike(like.post)
			 setupliked(like.like)
			})
			.catch((error) => {
				console.log(error)
			
      })
  }
  const handledislike=()=>{
    fetch(`${APIConfig.API_URI}/Post/dislike/${idPost}/${currentuser.userId}`,
			{method: 'GET'}).then((response) => {
				if (!response.ok) {
					throw new Error('Error - 404 Not Found')
        }
        
        return response.json()
       
			})
			.then((like) => {
			 setupdislike(like.post)
			 setupdisliked(like.like)
			})
			.catch((error) => {
				console.log(error)
			
      })
      
  }
   useEffect(()=>{
    fetch(`${APIConfig.API_URI}/Post/getlike/${idPost}/${currentuser.userId}`,
			{method: 'GET'}).then((response) => {
				if (!response.ok) {
					throw new Error('Error - 404 Not Found')
				}
				return response.json()
			})
			.then((like) => {
			 setuplike(like.post)
			 setupliked(like.like)
			})
			.catch((error) => {
				console.log(error)
			
      })
      fetch(`${APIConfig.API_URI}/Post/getdislike/${idPost}/${currentuser.userId}`,
			{method: 'GET'}).then((response) => {
				if (!response.ok) {
					throw new Error('Error - 404 Not Found')
				}
				return response.json()
			})
			.then((like) => {
			 setupdislike(like.post)
       setupdisliked(like.dislike)
       
			})
			.catch((error) => {
				console.log(error)
			
			})
   
   },[])
   
  if (update) {  
    return (
      <div>
        <div id="postdownload">
        
          <div id="postimg">
            <div id='userwrap'>
                <img id='profiluser'src={photo_user}/>
                <p>{pseudo}</p>
            </div>
            <div id='postwrap'>
                <h3>{titre}</h3>
                <img src={photo}/>
            </div>
          </div>
          <div id='postbtn'>
              {IsUser?
              <div> 
                <i className="fas fa-trash-alt"onClick={()=>{fetchdeleteOnePost(idPost)}}></i><br/>
                <i className="fas fa-pencil-alt"onClick={()=>{setupdate(false)}}></i><br/>
              </div>
                      :null  }
              
              <i className={userliked?"userlike like fas fa-thumbs-up":"like fas fa-thumbs-up"}onClick={userdisliked?null:handlelike}>{like}</i><br/>
              <i className={userdisliked?"userdislike like fas fa-thumbs-down":"like fas fa-thumbs-down"}onClick={userliked?null:handledislike}>{dislike}</i><br/>
              <i className="fas fa-comments" onClick={handlecom}></i>
          </div>
          
        </div>
        {comm?<Comment post={idPost} user={currentuser.userId} pseudo={currentuser.pseudo}/>:null}
      </div>
  )
   }else{
     return(
      <div id="postdownload">
        <UpdatePost photo={photo} title={titre} setUdate={()=>{setupdate(true)}} idPost={idPost}/>
      </div>
     )
   }
  
}

const mapStateToProps=({userReducer,postReducer})=>{
  return{
     currentuser:userReducer.currentuser,
     like:postReducer.like,
     userliked:postReducer.userliked
  }
}
const mapDispatchToProps=(dispatch)=>{
    return{
      fetchdeleteOnePost:(idPost)=>dispatch(fetchdeleteOnePost(idPost))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostDownload)