import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { AlbumService } from '../album.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-album-editor',
  templateUrl: './album-editor.component.html',
  styleUrls: ['./album-editor.component.scss']
})
export class AlbumEditorComponent implements OnInit {

  uploader:FileUploader;
  hasBaseDropZoneOver:boolean;
  baseUrl = environment.apiUrl;

  constructor(private albumService: AlbumService,
              private toastr: ToastrService) { }

  ngOnInit(){
    this.initializeUploader();
  }

  fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'photo/addPhoto',
      isHTML5: true,
      allowedFileType:['image'],
      removeAfterUpload:true,
      autoUpload: false
    });

    this.uploader.onAfterAddingAll = file => {file.withCredentials = true;}
  }

  deletePhoto(id: number) {
    this.toastr.warning('Are you sure you want ot delete this photo?');
    //  () =>{
    //   this.albumService.deletePhoto(id).subscribe(() => {
    //     this.toastr.success('photo has been deleted');
    //   }, error => {
    //     this.toastr.error('Failed to load the photo')
    //   })
    // })
  }
}
