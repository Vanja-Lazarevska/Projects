import { Component, DoCheck, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/service/products/products.service';
import { ShoppingCartService } from 'src/app/service/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, DoCheck{

  title: string = 'My Orders'
  // myOrders: number[]
  orderedProducts: Product[] = []
  // totalPrice: number = 0


  constructor(private readonly cartService: ShoppingCartService ){}
  ngDoCheck(): void {
    this.cartService.userOrders.subscribe((data)=> {
      data.forEach((order) => {
        if(order.quantity === undefined) {
          this.cartService.getOrderOfUser()
        }
      })
      this.orderedProducts = data    
    })  
  }

  ngOnInit(): void {

    this.cartService.getOrderOfUser()



    // this.cartService.cartOfUser.subscribe((data)=>{
    //   this.orderedProducts.push(data)
    //   console.log(this.orderedProducts)
    // } )

    
    // this.productsService._myOrders.subscribe((data)=> {
    //   this.myOrders = data  
    
    //   data.forEach((orderId)=> {
    //     const order = this.productsService.findById(orderId)
    //     this.orderedProducts.push(order)

    //     this.totalPrice += order.price * order.ordered
    //   })
    // })

  }

   handleDeleteCart () {
    this.cartService.deleteAllCart()

    this.cartService.deleted.subscribe((data)=> {
      if(data) {
        this.cartService.getOrderOfUser()

      }
    })


  }



}
