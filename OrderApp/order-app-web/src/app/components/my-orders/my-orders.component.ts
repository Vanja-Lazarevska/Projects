import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/service/products/products.service';
import { ShoppingCartService } from 'src/app/service/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  title: string = 'My Orders'
  myOrders: number[]
  eachOrder: Product[]  = []
  displayedColumns: string[] = ['position','name', 'quantity', 'price per product', 'total price', 'delete' ];
  totalPrice: number = 0


  constructor(private readonly productsService: ProductsService ){}

  ngOnInit(): void {
    // this.productsService._myOrders.subscribe((data)=> {
    //   this.myOrders = data  
    
    //   data.forEach((orderId)=> {
    //     const order = this.productsService.findById(orderId)
    //     this.eachOrder.push(order)

    //     this.totalPrice += order.price * order.ordered
    //   })
    // })

  }

  // handleDelete = (productId: number) => {
  //   console.log(productId)
  //   const product = this.productsService.findById(productId)
  //   product.ordered -= 1
  //   product.stock += 1

  //   if(product.ordered === 0) {
  //     console.log(this.eachOrder)
  //     this.eachOrder.filter((order) => order.id !== productId)
  //     return 

  //   }
  //   console.log(this.myOrders)



  // }







}
