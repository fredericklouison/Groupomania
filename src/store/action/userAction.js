import * as types from '../constant/userActionType'
import * as APIConfig from '../constant/ApiConfig'
import Auth from '../../auth.service'
export const signupUser = () => ({
    type:types.SIGNUP_USER,
    loading:true
})

export const signupUserSuccess = (user) => ({
    type:types.SIGNUP_USER_SUCCESS,
	loading:false,
	IsAuthenticated:true,
    user
})
export const signupUserError = (error) => ({
    type:types.SIGNUP_USER_ERROR,
	loading:false,
	IsAuthenticated:false,
    error
})
export const setCurrentUser = () => ({
	type:types.SET_CURRENT_USER,
	currentuser:Auth.currentuserSet(),
	IsAuthenticated:true
})
export const userLogout = () => ({
	type:types.LOG_OUT,
	IsAuthenticated:false
})

export const fetchUserSignup = (body) => {
	return (dispatch) => {
		dispatch(signupUser())
		const formData = new FormData();
		formData.append('user',JSON.stringify(body.body));
		return fetch(
			`${APIConfig.API_URI}/User/signup`,
			{
                method: 'POST',
                body:formData
			}
		)
			.then((response) => {
				console.log(response.status)
				if (!response.ok) {
					throw new Error('Error - 404 Not Found')
				}
                
				return response.json()
			})
			.then((user) => {
				Auth.sigin(user.token)
				console.log(user)
				console.log('hello')
				dispatch(signupUserSuccess(user))
				window.location.replace("http://localhost:3000/interface");
			})
			.catch((error) => {
				console.log(error)
				dispatch(signupUserError(error))
			})
	}
}
export const siginUser = () => ({
    type:types.SIGNIN_USER,
    loading:true
})

export const siginUserSuccess = (user) => ({
    type:types.SIGNIN_USER_SUCCESS,
	loading:false,
	IsAuthenticated:true,
    user
})
export const siginUserError = (erreur) => ({
    type:types.SIGNIN_USER_ERROR,
	loading:false,
	IsAuthenticated:false,
    error:erreur
})
export const fetchUserSigin = (body) => {
	return (dispatch) => {
		dispatch(siginUser())
		console.log(JSON.stringify(body))
		return fetch(`${APIConfig.API_URI}/User/sigin`,
		{
                method:'POST',
				body:JSON.stringify(body),
				headers:APIConfig.HEADERS
				
				
			})
			.then((response) => {
				if (!response.ok) {
					console.log(response.status)
					switch (response.status) {
						case 501:
							throw new Error('utilisateur introuvable')
						case 401:
							throw new Error('Mot de passe incorect')
						default:
							throw new Error("internal error server")
							
					}	
				}

				return response.json()
			})
			.then((user) => {
				Auth.sigin(user.token)
				
				dispatch(siginUserSuccess(user))
				window.location.replace("http://localhost:3000/interface");
			})
			.catch((error) => {
				dispatch(siginUserError(error.toString().split(':')[1]))
			})
	}
}
export const updateUser = () => ({
    type:types.UPDATE_USER,
    loading:true
})

export const updateUserSuccess = (user) => ({
    type:types.UPDATE_USER_SUCCESS,
	loading:false,
	IsAuthenticated:true,
    user
})
export const updateUserError = (erreur) => ({
    type:types.UPDATE_USER_ERROR,
	loading:false,
    error:erreur
})
export const fetchUpdateUser = (body) => {
	return (dispatch) => {
		dispatch(updateUser())
		console.log(body)
		const formData = new FormData();
		formData.append('user',JSON.stringify(body.body));
		formData.append('image', body.photo);
		return fetch(
			`${APIConfig.API_URI}/User/update`,
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
			.then((user) => {
				Auth.sigin(user.token)
				dispatch(updateUserSuccess(user))
				window.location.replace("http://localhost:3000/interface");
			})
			.catch((error) => {
				dispatch(updateUserError(error))
			})
	}
}