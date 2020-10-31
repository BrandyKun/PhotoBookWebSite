export interface IUser {
    id:number;
    email: string;
    displayName:string;
    userName: string;
    token: string;
    roles?: string[];
  }