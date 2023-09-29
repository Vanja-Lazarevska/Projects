import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/product.interface';
import { ShoppingCartService } from 'src/app/service/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit{

  constructor(private readonly cartService: ShoppingCartService){}
  productsOrdered: Product[]
  ngOnInit(): void {
    this.initForm()

    this.cartService.getOrderOfUser()
    this.cartService.userOrders.subscribe((data)=> this.productsOrdered = data)
  }


  checkOutForm: FormGroup

  initForm = () => {
    this.checkOutForm = new FormGroup({
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required)
    })
  }

  handleSubmitForm () {
    const {address, city, country}  = this.checkOutForm.value
    const checkOut = {
      timeOfOrder: new Date().getTime(),
      shipping: `${address},${city},${country}`, 
      products: this.productsOrdered.map((order)=> order.id)
   }

  //  this.cartService.deleteAllCart()

    console.log(checkOut)
  }

}
