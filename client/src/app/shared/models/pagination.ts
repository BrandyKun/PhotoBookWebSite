import {IPhoto} from './photo';

export interface IPagination {
    pageIndex: number;
    pageSize: number;
    count: number;
    data: IPhoto[];
}
