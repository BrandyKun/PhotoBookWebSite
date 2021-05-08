// import { ITag } from './../../shared/models/tag';
import { Component, Input, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { AlbumService } from '../../album/album.service';
import { ToastrService } from 'ngx-toastr';
import { ITag } from 'src/app/shared/models/tag';
import { formatCurrency } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-album-editor',
  templateUrl: './album-editor.component.html',
  styleUrls: ['./album-editor.component.scss']
})

export class AlbumEditorComponent implements OnInit {
  ngForm: FormGroup;
  uploader:FileUploader;
  hasBaseDropZoneOver:boolean;
  tags: ITag[];
  baseUrl = environment.apiUrl;
  photoTags : ITag[] = [];

  constructor(private albumService: AlbumService,
              private toastr: ToastrService,
              private fb: FormBuilder) { }

  ngOnInit(){
    this.initializeUploader();
    this.getTags();
    this.ngForm = this.fb.group({
      name: this.fb.array([])});
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
      autoUpload: false,
      parametersBeforeFiles: true,
      additionalParameter: { TagId: this.photoTags  },
    });
    // this.uploader.setOptions({additionalParameter: })

    // this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
    //   form.append('TagId', this.photoTags);
    // };

    // console.log(this.uploader)
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

  getTags() {
    this.albumService.getTags().subscribe((response) => {
      this.tags = response;
    },(error) => {
      console.log(error);
    });
  }

  onChange(tagpt: ITag, isChecked: boolean) {
    const photoTag= (this.ngForm.controls.name as FormArray);

    if (isChecked) {
      photoTag.push(new FormControl(tagpt));
      this.photoTags.push(tagpt);
      console.log(this.photoTags);
    } else {
      const index = photoTag.controls.findIndex(x => x.value === tagpt.id);
      photoTag.removeAt(index);
      // console.log(photoTag.value);
      const indext = this.photoTags.findIndex( x => x.id === tagpt.id);
      this.photoTags.splice(indext);
      console.log(this.photoTags);
    }
  }

//   submit(){
//     let formData: FormData = new FormData();
//     formData.append('TagId', this.photoTags);
// }
}
