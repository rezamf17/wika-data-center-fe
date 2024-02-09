import UserAPI from '../../infra/UserAPI';
import UserEntity from '../entities/entityUser';

class UserService {
  private userAPI: UserAPI;

  constructor() {
    this.userAPI = new UserAPI();
  }

  async getAllUser(search:string, status:string): Promise<UserEntity> {
    const user = await this.userAPI.getUser(search, status);
    return user
  }

  async insertDataUser(): Promise<UserEntity> {
    const user = await this.userAPI.insertUser();
    return user
  }
}

export default UserService;