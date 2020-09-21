import React from "react";
import{Provider}  from 'react-redux';

 import{createStore,applyMiddleware} from 'redux'
 import thunk from 'redux-thunk'
import App from "./app";
 import {userReducer}from './store/UserReducer'
 const store=createStore(userReducer,applyMiddleware(thunk))
 const Store = () => {
     return (
         <Provider store={store} >
            <App />
         </Provider>
     )
 }
 
 export default Store