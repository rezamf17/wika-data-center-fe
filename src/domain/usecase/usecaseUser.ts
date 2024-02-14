import UserAPI from '../../infra/UserAPI';
import UserEntities from '../entities/UserEntities';
import Response from '../entities/Response';
import RequestUserEntity from '../entities/RequestUserEntity';

class UserService {
  private userAPI: UserAPI;

  constructor() {
    this.userAPI = new UserAPI();
  }

  async getAllUser(search:string, status:string): Promise<UserEntities> {
    const user = await this.userAPI.getUser(search, status);
    return user
  }

  async insertDataUser(userData:RequestUserEntity): Promise<Response> {
    const user = await this.userAPI.insertUser(userData);
    return user
  }

  async deleteDataUser(id:number): Promise<Response> {
    const user = await this.userAPI.deleteUser(id);
    return user
  }
}

export default UserService;