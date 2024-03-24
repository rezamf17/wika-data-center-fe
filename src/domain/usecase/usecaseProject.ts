import ProjectAPI from '../../infra/ProjectAPI';
import {Response} from '../entities/entityProject';

class projectService {
  private projectAPI: ProjectAPI;

  constructor() {
    this.projectAPI = new ProjectAPI();
  }

  async getAllProject(): Promise<Response> {
    const project = await this.projectAPI.getProject();
    return project
  }
}

export default projectService;