import React, { useState } from 'react'
import { connect } from 'react-redux'
import Photo from './photo'
import {fetchUpdateUser,setCurrentUser,fetchDeleteUser} from '../../../store/action/userAction'
import './profil.css'


const Profil = ({currentuser,fetchUpdateUser,setCurrentUser,fetchDeleteUser}) => {
    const [onModify,setModify]=useState(true)
    const [name,setname]=useState(currentuser.nom)
    const [prenom,setprenom]=useState(currentuser.prenom)
    const [pseudo,setpseudo]=useState(currentuser.pseudo)
    const [email,setemail]=useState(currentuser.email)
    const [photo,setphoto]=useState("")
    const [photopreview,setphotoPreview]=useState()
    
    const photoChange=e=>{
        setphoto(e.target.files[0])
        setphotoPreview(URL.createObjectURL(e.target.files[0]))
       }

    const nomChange=e=>{setname(e.target.value)
       }
    const prenomChange=e=>{setprenom(e.target.value)
      }
    const pseudoChange=e=>{setpseudo(e.target.value)
      }
    const handleClick= ()=>{
        setphotoPreview('')
        setphoto()
        setModify(true)
    }
    const handleDelete= ()=>{
        fetchDeleteUser(currentuser.userId)
    }
    const handleValid=(e)=>{
        e.preventDefault()
        const body={
            "email":email,
            "pseudo":pseudo,
            "nom":name,
            "prenom":prenom
        }
        const request ={
            body,
            photo
        }
        fetchUpdateUser(request)
        setCurrentUser()
        setphoto()
        setModify(true)
        setphotoPreview('')
    }
    if(onModify){
        return (
            <div >
                
                <h1 className='profil'>Profil</h1>
                <Photo/>
                <h3 className='profil'>Pseudo:{currentuser.pseudo}</h3>
                <h3 className='profil'>Nom:{currentuser.nom}</h3>
                <h3 className='profil'>prenom:{currentuser.prenom}</h3>
                <button className='btn btn-danger' onClick={()=>{setModify(false)}}>Modifier</button>
                <button id="supp" className='btn btn-danger' onClick={handleDelete}>Supprimer compte</button>
            </div>
        )
    }else{
        return (
            <div >
                <h1 className='profil'>Modifier Profil</h1>
                {photo?<div id="preview"><img id='photopreview'src={photopreview} /></div>:<Photo/>}
                <form>
                    
                    <div className="button-wrapper">
                        <span className="label">
                            Upload File
                        </span>
                        <input type="file"accept='image/*' name="upload"onChange={photoChange}id="upload" className="upload-box"placeholder="Upload File"/>
                    </div>
                    <label htmlFor='pseudo'>Pseudo:<input id='pseudo'name='pseudo'onChange={pseudoChange} type='text'value={pseudo}/></label>
                    <br/>
                    <label htmlFor='nom'>Nom:<input id='nom'name='nom'onChange={nomChange} type='text'value={name}/></label>
                    <br/>
                    <label htmlFor='prenom'>Prénom:<input id='prenom'name='prenom'onChange={prenomChange} type='text'value={prenom}/></label>
                </form>
                <button className='btn btn-secondary' onClick={handleClick}>Retour</button>
                <button className='btn btn-success' onClick={handleValid}>valider</button>
            </div>
        )
    }

    
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
        fetchUpdateUser:(body)=>dispatch(fetchUpdateUser(body)),
        setCurrentUser:()=>{dispatch(setCurrentUser())},
        fetchDeleteUser:(id)=>{dispatch(fetchDeleteUser(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profil)