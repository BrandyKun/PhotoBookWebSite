import { IPhoto } from './../../shared/models/photo';
import { BasketService } from './../../basket/basket.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: IPhoto;

  constructor(private _basketService: BasketService) { }

  ngOnInit(): void {
  }

  addItemToBasket() {
    this._basketService.addItemToBasket(this.product)
  }
}
