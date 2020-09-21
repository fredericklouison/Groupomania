import InitialState from './InitialState'
import { SIGNUP_USER_SUCCESS,SIGNUP_USER, SIGNUP_USER_ERROR } from './constant/userActionType'
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
                user:action.user
            }
            case SIGNUP_USER_ERROR:
            return{
                ...state,
                error:action.error,
                loading : action.loading
            }
		default:
			return state
	}
}
