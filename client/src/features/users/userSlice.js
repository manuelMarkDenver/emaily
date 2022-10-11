import { createSlice } from '@reduxjs/toolkit'

const initialState =  {
  user: {},
  loading: false,
  error: []
}


const authSlice = createSlice({
  name: 'user',
  initialState, 
  reducers: {
    getUser(state, action) {
      return {
        ...state,
        user: action.payload
      }
    }
  },
})

export const { getUser } = authSlice.actions

export default authSlice.reducer