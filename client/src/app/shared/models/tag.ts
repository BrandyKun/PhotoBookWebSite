import { IPhoto } from 'src/app/shared/models/photo';
export interface ITag {
  id: number;
  name: string;
  photo: IPhoto;
}
