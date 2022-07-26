import axios from 'axios'

export const url = axios.create({
	baseURL : "https://akproblogapp.herokuapp.com/api"
})