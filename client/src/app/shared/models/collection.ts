import { IPhoto } from 'src/app/shared/models/photo';
export interface ICollection {
    id: number;
    name: string;
    photo: IPhoto;
}
