interface UserEntities {
    id : number;
    nip : string;
    nama_lengkap : string;
    email : string;
    role : string;
    status : string
  }

  interface Response {
    code: number;
    message: string;
    data: any[];
  }
  
  
  export default Response;