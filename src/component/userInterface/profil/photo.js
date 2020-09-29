import React from 'react'
import { connect } from 'react-redux'
import './photo.css'

const Photo = ({currentuser}) => {
    return (
        <div id='photo-content' >
            <img id='photo'src={currentuser.photo} />
        </div>
    )
}
const mapStateToProps=({userReducer})=>{
    return{
       currentuser:userReducer.currentuser,
       IsAuthenticated:userReducer.IsAuthenticated,
       error:userReducer.error,
       userReducer
    }
}
export default connect(mapStateToProps)( Photo)
