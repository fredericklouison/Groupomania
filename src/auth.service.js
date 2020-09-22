import jwt_decode from "jwt-decode";


class Auth {
    sigin=(cb)=>{
        localStorage.setItem('token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1MTYyMzkwMjJ9.HmDv473KGFNJtOzpnav8vSwqUycNJTE3iOTvaIm7LnM")
       cb()
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