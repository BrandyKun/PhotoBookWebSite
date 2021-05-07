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
      // additionalParameter: { tags:  }
    });
    // this.uploader.setOptions({additionalParameter: })

    this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
      form.append('tag', this.tags);
    };
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

  onChange(name: string, isChecked: boolean) {
    const photoTag= (this.ngForm.controls.name as FormArray);

    if (isChecked) {
      photoTag.push(new FormControl(name));
      console.log(photoTag);
    } else {
      const index = photoTag.controls.findIndex(x => x.value === name);
      photoTag.removeAt(index);
    }
  }
}
