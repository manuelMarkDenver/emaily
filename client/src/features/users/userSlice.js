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
    },
    showLoading(state) {
      return {
        ...state,
        loading: true
      }
    },
    hideLoading(state) {
      return {
        ...state,
        loading: false
      }
    },
  },
})

export const { getUser, showLoading, hideLoading } = authSlice.actions

export default authSlice.reducer