export interface Project {
    id: number,
    projectName: string,
    status: string,
    departemen: string,
    startProject: string,
    endProject: string,
    description: string,
    pj_proyek: string,
}

export interface Response {
    code: number;
    message: string;
    data: any[];
  }