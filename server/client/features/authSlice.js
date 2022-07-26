import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { url } from '../network'

//const user = JSON.parse(localStorage.getItem('user'))
// if (typeof window !== "undefined") {
// 	var user = JSON.parse(localStorage.getItem('user'))
// }

const initialState = {
	user: {}
}

export const login = createAsyncThunk('auth/login', async(details)=>{
  try{
		const res = await url.post('/auth/login', details)

		if(res){
			localStorage.setItem('user', JSON.stringify(res.data))
		}

		return res.data
	} catch(err) {
		console.log(err)
	}
})

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		addAuth: (state, {payload})=>{
			var user1 = JSON.parse(localStorage.getItem('user'))
			state.user = user1
			console.log(state.user)
		}
	},
	extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, {payload}) => {
        state.user = payload
      })
    }
})

export const { addAuth } = authSlice.actions
export const getUser  = (state)=>state.auth.user
export default authSlice.reducer