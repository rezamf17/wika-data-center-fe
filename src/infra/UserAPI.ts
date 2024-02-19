import axios from 'axios';
import RequestUserEntity from '../domain/entities/RequestUserEntity'

class UserAPI {

  async getUser(search:string, status:string) {
    try {
      const response = await axios.get(`http://localhost:3001/user?search=${search}&status=${status}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  }

  async insertUser (userData : RequestUserEntity) {
    try {
      const response = await axios.post(`http://localhost:3001/user`, userData);
      return response.data;
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  }

  async updateUser (userData : RequestUserEntity) {
    try {
      const response = await axios.put(`http://localhost:3001/user`, userData);
      return response.data;
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  }

  async deleteUser (id:number) {
    try {
      const response = await axios.delete(`http://localhost:3001/user`, { data: { id } });
      return response.data;
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  }
}

export default UserAPI;