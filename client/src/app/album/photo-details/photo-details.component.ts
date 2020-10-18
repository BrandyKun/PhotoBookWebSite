import { Component, OnInit, ViewChild } from '@angular/core';
import { IPhoto } from 'src/app/shared/models/photo';
import { NgForm } from '@angular/forms';
import { AlbumService } from '../album.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss'],
})
export class PhotoDetailsComponent implements OnInit {
  
  photo: IPhoto;

  constructor(private albumService: AlbumService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct() {
    this.albumService.getPhoto(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(
      (photo) => {
        this.photo = photo;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  
}
