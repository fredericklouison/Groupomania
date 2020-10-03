import InitialState from '../InitialState'
import { SIGNUP_USER_SUCCESS,SIGNUP_USER, SIGNUP_USER_ERROR, SET_CURRENT_USER,LOG_OUT,SIGNIN_USER,SIGNIN_USER_ERROR,SIGNIN_USER_SUCCESS, UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR, DELETE_USER, DELETE_USER_SUCCESS, DELETE_USER_ERROR } from '../constant/userActionType'
 export const userReducer=(state=InitialState,action)=>{
    switch (action.type) {
        case SIGNUP_USER:
            return{
                ...state,
                loading : action.loading
            }
		case SIGNUP_USER_SUCCESS:
            return{
                ...state,
                loading : action.loading,
                IsAuthenticated:action.IsAuthenticated,
                user:action.user
            }
            case SIGNUP_USER_ERROR:
            return{
                ...state,
                error:action.error,
                IsAuthenticated:action.IsAuthenticated,
                loading : action.loading
            }
            case SET_CURRENT_USER:
                return{
                    ...state,
                    currentuser:action.currentuser,
                    IsAuthenticated:action.IsAuthenticated
                    
                }
            case LOG_OUT:
            return{
                ...state,
                currentuser:action.currentuser,
                IsAuthenticated:action.IsAuthenticated
                    
            }
        case SIGNIN_USER:
            return{
                ...state,
                loading : action.loading
            }
		case SIGNIN_USER_SUCCESS:
            return{
                ...state,
                loading : action.loading,
                IsAuthenticated:action.IsAuthenticated,
                user:action.user
            }
            case SIGNIN_USER_ERROR:
            return{
                ...state,
                error:action.error,
                IsAuthenticated:action.IsAuthenticated,
                loading : action.loading,
                error:action.error
            }
            case UPDATE_USER:
            return{
                ...state,
                loading : action.loading
            }
            case UPDATE_USER_SUCCESS:
            return{
                ...state,
                loading : action.loading,
                IsAuthenticated:action.IsAuthenticated,
                user:action.user
            }
            case UPDATE_USER_ERROR:
            return{
                ...state,
                loading : action.loading,
                error:action.error
            }
            case DELETE_USER:
            return{
                ...state,
                loading : action.loading
            }
            case DELETE_USER_SUCCESS:
            return{
                ...state,
                loading : action.loading,
                IsAuthenticated:action.IsAuthenticated
            }
            case DELETE_USER_ERROR:
            return{
                ...state,
                loading : action.loading,
                error:action.error
            }
		default:
			return state
	}
}
