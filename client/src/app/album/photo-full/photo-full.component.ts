import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { IPhoto } from 'src/app/shared/models/photo';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-photo-full',
  templateUrl: './photo-full.component.html',
  styleUrls: ['./photo-full.component.scss']
})
export class PhotoFullComponent implements OnInit {
  @Input() open: boolean;
  @Input() photo: IPhoto;

  @Output() close = new EventEmitter();

  constructor(private _albumservice: AlbumService) { }

  ngOnInit() {
    this.getPhoto(this.photo.id)
  }

  getPhoto(id:number) {
    this._albumservice.getPhoto(id).subscribe((response) => {
      this.photo = response;
    }, (error)=> {
      console.log(error);
    });
  }

  // nextPhoto(){
  //   let next = this.photo.id + 1;

  //   this._albumservice.getPhoto(next).subscribe((response) => {
  //     this.photo = response;
  //   }, (error)=> {
  //     console.log(error);
  //   });

  // }

  // previousPhoto(id: number){
  //   let previous = id + 1;

  //   this._albumservice.getPhoto(previous).subscribe((response) => {
  //     this.photo = response;
  //   }, (error)=> {
  //     console.log(error);
  //   });
  // }
}
