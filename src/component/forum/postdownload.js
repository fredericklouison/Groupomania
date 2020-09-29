import React, { useState } from 'react'
import { connect } from 'react-redux'
import './postdownload.css'
import UpdatePost from './postUpdate'

const PostDownload = ({photo_user,pseudo,titre,photo,usersid,currentuser,idPost}) => {
  const IsUser=currentuser.userId==usersid
  const [update,setupdate]=useState(true)
   if (update) {
     
    return (
      
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
               <i className="fas fa-trash-alt"></i><br/>
              <i className="fas fa-pencil-alt"onClick={()=>{setupdate(false)}}></i><br/>
             </div>
                    :null  }
            
            <i className="like fas fa-thumbs-up"></i><br/>
            <i className="like fas fa-thumbs-down"></i><br/>
        </div>
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
const mapStateToProps=({userReducer})=>{
  return{
     currentuser:userReducer.currentuser
  }
}
export default connect(mapStateToProps)(PostDownload)