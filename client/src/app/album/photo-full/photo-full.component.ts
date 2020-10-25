import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { IPhoto } from 'src/app/shared/models/photo';

@Component({
  selector: 'app-photo-full',
  templateUrl: './photo-full.component.html',
  styleUrls: ['./photo-full.component.scss']
})
export class PhotoFullComponent implements OnInit {
  @Input() open: boolean;
  @Input() photo: IPhoto;

  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
