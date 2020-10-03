import InitialStatepost from '../initialStatepost'
import{CREATE_POST,CREATE_POST_ERROR,CREATE_POST_SUCCESS, DELETE_ONE_POST, DELETE_ONE_POST_ERROR, DELETE_ONE_POST_SUCCESS, DISLIKE_ONE_POST, DISLIKE_ONE_POST_ERROR, DISLIKE_ONE_POST_SUCCESS, GET_ALL_POST, GET_ALL_POST_ERROR, GET_ALL_POST_SUCCESS, GET_DISLIKE_ONE_POST, GET_DISLIKE_ONE_POST_ERROR, GET_DISLIKE_ONE_POST_SUCCESS, GET_LIKE_ONE_POST, GET_LIKE_ONE_POST_ERROR, GET_LIKE_ONE_POST_SUCCESS, LIKE_ONE_POST, LIKE_ONE_POST_ERROR, LIKE_ONE_POST_SUCCESS, UPDATE_ONE_POST, UPDATE_ONE_POST_ERROR, UPDATE_ONE_POST_SUCCESS} from '../constant/postActionType'
export const postReducer=(state=InitialStatepost,action)=>{
    switch (action.type) {
        case CREATE_POST:
            return{
                ...state,
                loading:action.loading
            }
        case CREATE_POST_SUCCESS:
            return{
                ...state,
                loading:action.loading
                
            }
        case CREATE_POST_ERROR:
            return{
                ...state,
                loading:action.loading,
                error:action.error
            }
    
        case GET_ALL_POST:
            return{
                ...state,
                loading:action.loading
            }
        case GET_ALL_POST_SUCCESS:
            return{
                ...state,
                loading:action.loading,
                post:action.post
            }
        case GET_ALL_POST_ERROR:
            return{
                ...state,
                loading:action.loading,
                error:action.error
            }
        case UPDATE_ONE_POST:
                return{
                    ...state,
                    loading:action.loading
                }
        case UPDATE_ONE_POST_SUCCESS:
                return{
                    ...state,
                    loading:action.loading
                }
        case UPDATE_ONE_POST_ERROR:
                return{
                    ...state,
                    loading:action.loading,
                    error:action.error
                }
        case DELETE_ONE_POST:
                return{
                        ...state,
                        loading:action.loading
                    }
        case DELETE_ONE_POST_SUCCESS:
                return{
                    ...state,
                    loading:action.loading
                }
        case DELETE_ONE_POST_ERROR:
                return{
                    ...state,
                    loading:action.loading,
                    error:action.error
                }    
        default:
            return state
    }
}