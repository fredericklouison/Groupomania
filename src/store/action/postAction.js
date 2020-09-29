import * as Types from '../constant/postActionType'
import * as APIConfig from '../constant/ApiConfig'
export const createPost=()=>({
    type:Types.CREATE_POST,
    loading:true
})
export const createPostSuccess=()=>({
    type:Types.CREATE_POST_SUCCESS,
    loading:false
    
})
export const createPostError=(error)=>({
    type:Types.CREATE_POST_ERROR,
    loading:false,
    error
})
export const fetchCreatePost=(body)=>{
    return (dispatch) => {
		dispatch(createPost())
		const formData = new FormData();
		formData.append('post',JSON.stringify(body.body));
		formData.append('image', body.photo);
		return fetch(
			`${APIConfig.API_URI}/Post/create`,
			{
                method: 'POST',
                body:formData
			}
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Error - 404 Not Found')
				}

				return response.json()
			})
			.then(() => {
				dispatch(createPostSuccess())
				window.location.replace("http://localhost:3000/forum");
			})
			.catch((error) => {
				console.log(error)
				dispatch(createPostError(error))
			})
	}
}
export const getAllPost=()=>({
    type:Types.GET_ALL_POST,
    loading:true
})
export const getAllPostSuccess=(post)=>({
    type:Types.GET_ALL_POST_SUCCESS,
    loading:false,
    post:post.post
})
export const getAllPostError=(error)=>({
    type:Types.GET_ALL_POST_ERROR,
    loading:false,
    error
})
export const fetchgetAllPost=()=>{
    return (dispatch) => {
		dispatch(getAllPost())
		
		return fetch(
			`${APIConfig.API_URI}/Post/`,
			{
                method: 'GET'
                
			}
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Error - 404 Not Found')
				}

				return response.json()
			})
			.then((post) => {
				dispatch(getAllPostSuccess(post))
				
			})
			.catch((error) => {
				console.log(error)
				dispatch(getAllPostError(error))
			})
	}
}
export const updateOnePost=()=>({
    type:Types.UPDATE_ONE_POST,
    loading:true
})
export const updateOnePostSuccess=(post)=>({
    type:Types.UPDATE_ONE_POST_SUCCESS,
    loading:false
})
export const updateOnePostError=(error)=>({
    type:Types.UPDATE_ONE_POST_ERROR,
    loading:false,
    error
})
export const fetchupdateOnePost=(body,idPost)=>{
	console.log(idPost)
    return (dispatch) => {
		dispatch(updateOnePost())
		const formData = new FormData();
		if (idPost) {
			formData.append('post',JSON.stringify(body.body));
			formData.append('image', body.photo);
		} else {
			formData.append('post',JSON.stringify(body.body));
		}
		return fetch(
			`${APIConfig.API_URI}/Post/`+idPost,
			{
                method: 'PUT',
                body:formData
                
			}
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Error - 404 Not Found')
				}
				return response.json()
			})
			.then((post) => {
				dispatch(updateOnePostSuccess(post))
				window.location.reload()
			})
			.catch((error) => {
				console.log(error)
				dispatch(updateOnePostError(error))
			})
	}
}