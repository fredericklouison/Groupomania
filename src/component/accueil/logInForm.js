import React ,{ useState }from 'react'
import './logInForm.css'
import {connect} from 'react-redux'
import {fetchUserSignup,setCurrentUser} from '../../store/action/userAction'
import { useHistory } from "react-router-dom";

const LogInForm = ({fetchUserSignup,setCurrentUser,textclick,loading,user}) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [nom, setenom] = useState('')
    const [prenom, setprenom] = useState('')
    const [pseudo, setpseudo] = useState('')
    const history = useHistory();
    
    const emailChange=e=>{setemail(e.target.value)
      }
    const passwordChange=e=>{setpassword(e.target.value)
       
    }
    const nomChange=e=>{setenom(e.target.value)
        }
    const prenomChange=e=>{setprenom(e.target.value)
       }

    const pseudoChange=e=>{setpseudo(e.target.value)
       }
    
    const handleClick=(e)=>{
        e.preventDefault()
        
        const body={
            "email":email,
            "password":password,
            "pseudo":pseudo,
            "nom":nom,
            "prenom":prenom,
            "IsAdmin":0
        }
        const request ={
            body
           
        }
        console.log( body)
        console.log(request)
        fetchUserSignup(request)
        setCurrentUser()
        setemail("")
        setpassword("")
        setenom("")
        setprenom('')
  
        
    }
    
    return (
        <div id='LogInForm'>
            <form>
               <h2>Inscription </h2>
               <label>Email:</label>
               <input type="email" name='email'className="form-control"value={email} onChange={emailChange} id="Emailform" aria-describedby="emailHelp"/>
               <br />
               <label>Password :</label>
               <input type="password"name='password' className="form-control"value={password} onChange={passwordChange} id="inputPassword"/>
               <br/>
               <input type="text" className="form-control col"name='pseudo' placeholder="Pseudo"value={pseudo} onChange={pseudoChange} />
               <br />
               <input type="text" className="form-control col"name='nom' placeholder="Nom"value={nom} onChange={nomChange} />
               <br />
               <input type="text" className="form-control col"name='prenom' placeholder="Prénom"value={prenom} onChange={prenomChange} />
               <button type="submit" onClick={handleClick}className="btn btn-success"id='btnConnect'>Submit</button>
               <a id='loginLink'href="#"onClick={textclick}>vous avez déjà un compte? connectez-vous!</a>
           </form>
        </div>
    )
}
const mapStateToProps=({userReducer})=>{
    return{
        loading:userReducer.loading,
        error:userReducer.error,
        user:userReducer.user,
        IsAuthenticated:userReducer.IsAuthenticated,
        currentuser:userReducer.currentuser
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        fetchUserSignup:(body)=>dispatch(fetchUserSignup(body)),
        setCurrentUser:()=>{dispatch(setCurrentUser())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LogInForm)