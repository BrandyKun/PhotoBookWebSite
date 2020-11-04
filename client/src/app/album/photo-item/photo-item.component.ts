import { Component, OnInit, Input } from '@angular/core';
import { IPhoto } from 'src/app/shared/models/photo';


@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss']
})
export class PhotoItemComponent implements OnInit {
  viewerOpen = false;
  @Input() photo: IPhoto;
  
  constructor() {}

  ngOnInit() {
    
    
  }

}
