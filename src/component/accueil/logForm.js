import React ,{useState}from 'react'
import { connect } from 'react-redux'
import { fetchUserSigin, setCurrentUser } from '../../store/action/userAction'
import './logForm.css'
const LogForm = ({fetchUserSigin,setCurrentUser,textclick,error}) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const emailChange=e=>{setemail(e.target.value)
    }
  const passwordChange=e=>{setpassword(e.target.value)
     
  }
  const handleClick=(e)=>{
    e.preventDefault()
    const body={
        email,
        password
    }
    fetchUserSigin(body)
    setCurrentUser()
    setemail("")
    setpassword("")
    
}

    return (
        <div id='LogForm'>
           <form>
               <h2>Connexion</h2>
               <label>Email:</label>
               <input type="email" className="form-control" value={email} onChange={emailChange} id="Emailform" aria-describedby="emailHelp"/>
               <br />
               <label>Password :</label>
               <input type="password" className="form-control"value={password} onChange={passwordChange} id="inputPassword"/>
                <p className="error">{error}</p>
               <button type="submit" onClick={handleClick} className="btn btn-primary"id='btnConnect'>Submit</button>
               <a id='loginLink'href="#"onClick={textclick}>vous n'avez pas de compte? inscrivez-vous!</a>
           </form>
        </div>
    )
}
const mapStateToProps=({userReducer})=>{
    return{
        
        error:userReducer.error
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        fetchUserSigin:(body)=>dispatch(fetchUserSigin(body)),
        setCurrentUser:()=>{dispatch(setCurrentUser())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LogForm)