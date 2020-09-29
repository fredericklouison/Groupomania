import React from "react";
import{Provider}  from 'react-redux';
 import{createStore,applyMiddleware} from 'redux'
 import thunk from 'redux-thunk'
import App from "./app";
import {rootReducer} from './store/reducers/RootReducer'
 const store=createStore(rootReducer,applyMiddleware(thunk))
 console . log ( store . getState ( ) )
 const Store = () => {
     return (
         <Provider store={store} >
            <App />
         </Provider>
     )
 }
 
 export default Store