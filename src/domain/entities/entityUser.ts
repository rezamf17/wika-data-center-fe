interface UserEntity {
    code : number;
    nip : string;
    name : string;
    email : string;
    role : string;
    status : string
  }

  interface ApiResponse {
    code: number;
    message: string;
    data: UserEntity[];
  }
  
  
  export default ApiResponse;