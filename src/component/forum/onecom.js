import React, { useEffect, useState } from 'react'
import * as APIConfig  from '../../store/constant/ApiConfig'
const Onecom = ({id,rende}) => {
    const[com,setcom]=useState([])
    const[rend,setrend]=useState(0)
   
    const handleClick=(comid)=>{
        fetch(`${APIConfig.API_URI}/comment/${comid}`,
        {method: 'DELETE'})
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error - 404 Not Found')
            }
            
            return response.json()})
                .then((comment) => {
                  setrend(rend+1)
                })
                .catch((error) => {
                    console.log(error)
                
        })
       }
    useEffect(()=>{
        fetch(`${APIConfig.API_URI}/comment/${id}`,
        {method: 'GET'})
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error - 404 Not Found')
            }
            
            return response.json()})
                .then((comment) => {
                setcom(comment.comment)
                
                })
                .catch((error) => {
                    console.log(error)
                
        })
    },[rend,rende])
    console.log(com)
    const postList=Object.keys(com)
.map(key=>{
 
return<div key={key} className='com'><p>{com[key].pseudo} : {com[key].Text}</p><div id='del'><i className="fas fa-trash-alt" onClick={()=>handleClick(com[key].idcom)}></i></div></div>
})
    return (
        <div id='content'>
                
                {postList}
        </div>
    )
}

export default Onecom