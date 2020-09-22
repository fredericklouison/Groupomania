import InitialState from './InitialState'
import { SIGNUP_USER_SUCCESS,SIGNUP_USER, SIGNUP_USER_ERROR, SET_CURRENT_USER,LOG_OUT } from './constant/userActionType'
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
		default:
			return state
	}
}
