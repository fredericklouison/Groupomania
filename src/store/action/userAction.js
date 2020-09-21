import * as types from '../constant/userActionType'
import * as APIConfig from '../constant/ApiConfig'
export const signupUser = () => ({
    type:types.SIGNUP_USER,
    loading:true
})

export const signupUserSuccess = (user) => ({
    type:types.SIGNUP_USER_SUCCESS,
    loading:false,
    user
})
export const signupUserError = (error) => ({
    type:types.SIGNUP_USER_ERROR,
    loading:false,
    error
})


export const fetchUserSignup = (body) => {
	return (dispatch) => {
		dispatch(signupUser())
		console.log(body)
		return fetch(
			`${APIConfig.API_URI}/User/signup`,
			{
                method: 'POST',
                body:JSON.stringify(body),
				headers: APIConfig.HEADERS
			},
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Error - 404 Not Found')
				}

				return response.json()
			})
			.then((user) => {
				dispatch(signupUserSuccess(user))
			})
			.catch((error) => {
				console.log(error)
				dispatch(signupUserError(error))
			})
	}
}