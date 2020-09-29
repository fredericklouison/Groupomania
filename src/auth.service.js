import jwt_decode from "jwt-decode";


class Auth {
    sigin=(token)=>{
        localStorage.setItem('token',token)
    }
    logout=(cb)=>{
        localStorage.removeItem('token')
        cb() 
    }
    currentuserSet=()=>{
        const token=localStorage.getItem('token')
        if(token){
            const decoded = jwt_decode(token)
            return (decoded)
        }
        
    }
    IsAuthenticated=(name)=>{ 
        if(name){
            return true
        }else{
            return false
        }
    }
}
export default new Auth();