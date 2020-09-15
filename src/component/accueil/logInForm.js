import React from 'react'
import './logInForm.css'
const LogInForm = (props) => {
    return (
        <div id='LogInForm'>
            <form>
               <h2>Inscription </h2>
               <label>Email:</label>
               <input type="email" class="form-control" id="Emailform" aria-describedby="emailHelp"/>
               <br />
               <label>Password :</label>
               <input type="password" class="form-control" id="inputPassword"/>
               <br />
               <input type="text" class="form-control col" placeholder="Nom" />
               <br />
               <input type="text" class="form-control col" placeholder="Prénom" />
               <button type="submit" class="btn btn-success"id='btnConnect'>Submit</button>
               <a id='loginLink'href="#"onClick={props.textclick}>vous avez déjà un compte? connectez-vous!</a>
           </form>
        </div>
    )
}

export default LogInForm