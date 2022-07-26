import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	categories: []
}

export const fetchCategory = createAsyncThunk('categories/fetchCategory', async()=>{
  try{
		const res = await axios.get('http://localhost:5000/api/categories')
		return res.data
	} catch(err) {
		console.log(err)
	}
})

export const CategorySlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.fulfilled, (state, {payload}) => {
        state.categories = payload
      })
    }
})


export const getCategories  = (state)=>state.categories.categories
export default CategorySlice.reducer