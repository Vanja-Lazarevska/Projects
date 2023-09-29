import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/service/products/products.service';
import { ShoppingCartService } from 'src/app/service/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],

})
export class ProductCardComponent {

  @Input()
  product: Product 

  myOrder: Product


  constructor(private readonly productsService: ProductsService, private readonly cartService: ShoppingCartService){}


  handleClickOrder =  (productId: number) => {  // on prakja cel produkt ne id
    console.log(productId)
    this.cartService.createOrder(productId)

    

  //  this.productsService.decrementInStock(orderId)

  // this.productsService.setMyOrder(orderId)
  
  }
  
}
