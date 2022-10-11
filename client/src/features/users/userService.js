import axios from 'axios';
import { getUser } from './userSlice';

export const getCurrentUser = async (dispatcher) => {
  try {
    const response = await axios.get('/api/current_user');
    console.log("🚀 ~ file: userService.js ~ line 7 ~ getCurrentUser ~ response ", response )
    dispatcher(getUser(response.data))
    return response
  } catch (error) {
    console.error(error)
  }
}