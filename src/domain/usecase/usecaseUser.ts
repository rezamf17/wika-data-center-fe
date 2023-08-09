import UserAPI from '../../infra/UserAPI';
import UserEntity from '../entities/entityUser';

class UserService {
  private userAPI: UserAPI;

  constructor() {
    this.userAPI = new UserAPI();
  }

  async getAllUser(): Promise<UserEntity[]> {
    const user = await this.userAPI.getUser();
    const users =  user.data.map((result:any, index:number) => ({
        id: index+1,
        nama_lengkap: result.nama_lengkap,
        email: result.email,
        role: result.role,
        nip: result.nip,
        status: result.status,
    }));
   return users
  }
}

export default UserService;