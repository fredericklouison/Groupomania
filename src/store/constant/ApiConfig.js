export const HEADERS = new Headers({
	'Content-Type': 'application/json',
	
	
})
const token= localStorage.getItem('token')
export const HEADERS_F = new Headers({
	'Authorization': 'Bearer'+localStorage.getItem('token'),
	
	
})
export const API_URI = 'http://localhost:5000/api'