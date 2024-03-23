import axios from 'axios';

class ProjectAPI {

    async getProject() {
      try {
        const response = await axios.get(`http://localhost:3001/project?projectName=&status=&departemen`);
        return response.data;
      } catch (error) {
        console.error('Error fetching news:', error);
        throw error;
      }
    }
  
  }
  
  export default ProjectAPI;