import jwt_decode from "jwt-decode";


class Auth {
    sigin=(token)=>{
        localStorage.setItem('token',token)
    }
    logout=()=>{
        localStorage.removeItem('token')
        window.location.replace("http://localhost:3000/")
        
        
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