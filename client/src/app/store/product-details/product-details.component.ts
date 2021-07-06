import { IPhoto } from 'src/app/shared/models/photo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from 'src/app/basket/basket.service';
import { AlbumService } from 'src/app/album/album.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IPhoto;
  quantity = 1;

  constructor( private albumService: AlbumService, private activatedRoute: ActivatedRoute,
     private basketService: BasketService) {}

     ngOnInit(): void {
      this.loadProduct();
    }
  
    loadProduct() {
      this.albumService.getPhoto(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(product => {
        this.product = product;
        // this.bcService.set('@productDetails', product.productName);
      }, error => {
        console.log(error);
      })
    }
  
    addItemToBasket() {
      this.basketService.addItemToBasket(this.product, this.quantity);
    }
  
    incrementQuantity() {
      this.quantity++;
    }
  
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    }
  

}
