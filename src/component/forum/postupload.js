import React,{useState} from 'react'
import { connect } from 'react-redux'
import { fetchCreatePost } from '../../store/action/postAction'
import './postupload.css'

const SendPost = ({fetchCreatePost,currentuser}) => {
    const[gif,setgif]=useState()
    const[gifPrev,setgifPrev]=useState()
    const[titre,setTitre]=useState()
    const gifChange=(e)=>{
        setgif(e.target.files[0])
        setgifPrev(URL.createObjectURL(e.target.files[0]))
    }
    const titreChange=(e)=>{
        setTitre(e.target.value)
    }
    const handleClick=(e)=>{
        e.preventDefault()
        const body={
            userid:currentuser.userId,
            photo_user:currentuser.photo,
            nom:currentuser.nom,
            pseudo:currentuser.pseudo,
            titre
        }
        
        const request={
            body,
            photo:gif
        }
        console.log(request)
        fetchCreatePost(request)

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
        fetchCreatePost:(body)=>dispatch(fetchCreatePost(body))
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SendPost)
