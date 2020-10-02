import React ,{useEffect, useState}from 'react'
import Onecom from './onecom'
import * as APIConfig  from '../../store/constant/ApiConfig'

const Comment = ({post,user,pseudo}) => {
    const [text,settext]=useState()
    const[rende,setrend]=useState(0)
    const handleChange=(e)=>{
      settext(e.target.value)
    }
    
    const handleClick=()=>{
        
        const body=JSON.stringify({
            text: text,
            postid: post,
            userid: user,
            pseudo:pseudo
        })

        const req=new FormData();
        req.append('com',body);
        fetch(`${APIConfig.API_URI}/comment/`,
        {method: 'POST',
        headers:{'Content-Type':'application/json'},
         body:body})
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error - 404 Not Found')
            }
            
            return response.json()})
                .then(() => {
                    setrend(rende+1)
                   settext('') 
                })
                .catch((error) => {
                    console.log(error)
                
        })
        
      }
    
    return (
        <div id='comment'>
            <Onecom id={post} rende={rende} />
            <div id='inputpost' className="input-group mb-3">
                <input type="text" value={text}onChange={handleChange} className="form-control" placeholder="Titre" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-outline-success" onClick={handleClick}type="button" id="button-addon2">Valider</button>
                </div>
            </div>
        </div>
    )
}

export default Comment