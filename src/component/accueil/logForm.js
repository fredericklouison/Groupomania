import React from 'react'
import './logForm.css'
const LogForm = (props) => {
   console.log(props)
    
    return (
        <div id='LogForm'>
           <form>
               <h2>Connexion</h2>
               <label>Email:</label>
               <input type="email" className="form-control" id="Emailform" aria-describedby="emailHelp"/>
               <br />
               <label>Password :</label>
               <input type="password" className="form-control" id="inputPassword"/>
               <button type="submit" className="btn btn-primary"id='btnConnect'>Submit</button>
               <a id='loginLink'href="#"onClick={props.textclick}>vous n'avez pas de compte? inscrivez-vous!</a>
           </form>
        </div>
    )
}

export default LogForm