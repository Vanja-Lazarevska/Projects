import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct } from 'src/app/interfaces/cart.interface';
import { Product } from 'src/app/interfaces/product.interface';
import { ShoppingCartService } from 'src/app/service/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{

  displayedColumns: string[] = ['position','name', 'quantity', 'price per product', 'total price', 'delete', 'edit' ];
  
  totalPrice :number;
  @Input()
  editShowed: boolean
  
  @Input()
  eachOrder: Product[]  = []


  constructor(private readonly cartService: ShoppingCartService, private readonly router: Router) {}


  ngOnInit(): void {

    if(!this.editShowed) {
      console.log(this.displayedColumns)
      console.log(this.editShowed)
      this.displayedColumns.splice(6, 1)

    } else {
      return
    }
  }



  handleTotalPrice (element: CartProduct) {
    this.totalPrice = (element.quantity ? element.quantity * element.price  : element.price) 
    return this.totalPrice
  }

  
  handleDelete =(id:number,element: CartProduct) => {
    const cartId = localStorage.getItem('cartId')
    this.cartService.quantityOfEachUserProduct.subscribe((data)=> element.quantity  = data )

    this.cartService.decrementProductInCart(id, +!cartId )
    
  }


 



  




  handleEdit = (id: number) => {
    console.log(id)

    this.router.navigate(['/admin/edit-product/', id])
  }


}
