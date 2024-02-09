import axios from 'axios';

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

  async insertUser () {
    try {
      const response = await axios.post(`http://localhost:3001/user`);
      return response.data;
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  }
}

export default UserAPI;