import { ISelectedFile } from "../components/file-upload/file-upload.component";

export interface IAppDetails {
    companyName?: string;
    mainLogoImageUrl?: string;
    aboutDescription?: string;
    aboutPictureUrl?: string;
    contactPictureUrl?: string;
    favIconUrl?: string;
    facebookLink?: string;
    instagram?: string;
    pinterest?: string;
    linkedIn?: string;
    twitter?: string;
    contactEmail?: string;
    contactNumber?: string;
    id: number;
}

export interface IAppDetailsView {
    companyName: string;
    mainLogoImage?: ISelectedFile;
    mainLogoImageUrl?: string;
    aboutDescription?: string;
    aboutPicture?: ISelectedFile;
    aboutPictUrl?: string;
    contactPicture?: ISelectedFile;
    contactPicUrl: string;
    favIconUrl?: string;
    facebookLink?: string;
    instagram?: string;
    pinterest?: string;
    linkedIn?: string;
    twitter?: string;
    contactEmail?: string;
    contactNumber?: string;
    id: number;
}
 