import axios from 'axios';
import { getUser, showLoading, hideLoading } from './userSlice';

export const getCurrentUser = async (dispatcher) => {
  try {
    const response = await axios.get('/api/current_user');
    dispatcher(showLoading)
    dispatcher(getUser(response.data))
    dispatcher(hideLoading)
    return response
  } catch (error) {
    console.error(error)
  }
}