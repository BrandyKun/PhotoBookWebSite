import { Component, OnInit, ViewChild } from '@angular/core';
import { AlbumService } from '../album.service';
import { ActivatedRoute } from '@angular/router';
import { IPhoto } from 'src/app/shared/models/photo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-photo-edit',
  templateUrl: './photo-edit.component.html',
  styleUrls: ['./photo-edit.component.scss'],
})
export class PhotoEditComponent implements OnInit {
  @ViewChild('editForm', { static: true }) editForm: NgForm;
  photo: IPhoto;

  constructor(
    private albumService: AlbumService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadPhotos();
  }

  loadPhotos() {
    this.albumService
      .getPhoto(+this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(
        (photo) => {
          this.photo = photo;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  updateUser() {

  }
}
