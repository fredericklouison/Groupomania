import React,{useState} from 'react'
import { connect } from 'react-redux'
import { fetchupdateOnePost } from '../../store/action/postAction'
import './postupload.css'

const UpdatePost = ({fetchupdateOnePost,currentuser,photo,title,setUdate,idPost}) => {
    const[gif,setgif]=useState()
    const[gifPrev,setgifPrev]=useState(photo)
    const[titre,setTitre]=useState(title)
    const gifChange=(e)=>{
        setgif(e.target.files[0])
        setgifPrev(URL.createObjectURL(e.target.files[0]))
    }
    const titreChange=(e)=>{
        setTitre(e.target.value)
    }
    const handleClick=(e)=>{
        setUdate()
        e.preventDefault()
        const body={
            userid:currentuser.userId,
            photo_user:currentuser.photo,
            nom:currentuser.nom,
            pseudo:currentuser.pseudo,
            titre,
            photo
            
        }
        let request
        if (gif) {
             request={
                body,
                photo:gif
            }
        }else{
            request={
                body
                
            }
        }
        
        fetchupdateOnePost(request,idPost)

    }

    return (
        <div id='Sendpost'>
            
            <div className="button-wrap">
                        <span className="labels">
                            image
                        </span>
                        <input type="file"accept='image/*' name="upload"id="uploads"onChange={gifChange} className="uploadbox"placeholder="Upload File"/>
            </div>
            <div id='inputpost' className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Titre"onChange={titreChange} aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-outline-success" onClick={handleClick}type="button" id="button-addon2">Valider</button>
                </div>
            </div>
            <div id='postPreview'>
                <h3>{titre}</h3>
                <img id='imgPrev'src={gifPrev}/>
            </div>

        </div>
    )
}
const mapStateToProps=({userReducer})=>{
    return{
       currentuser:userReducer.currentuser,
       IsAuthenticated:userReducer.IsAuthenticated,
       error:userReducer.error,
       userReducer
       
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        fetchupdateOnePost:(body,idPost)=>dispatch(fetchupdateOnePost(body,idPost))
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdatePost)
