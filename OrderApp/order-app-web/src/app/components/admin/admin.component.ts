import { Component, DoCheck, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/service/products/products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{

  allProducts: Product[]

  constructor(private readonly productsService: ProductsService){}


  ngOnInit(): void {
    this.productsService.getAllProductsAuth()

    console.log('AMDIN ')
    this.productsService._productsAuth.subscribe((data)=> {
      console.log(data)
      this.allProducts = data
    })

  }
    addToProduct: boolean = true

  toggleAddToProduct = () => {
    this.addToProduct = !this.addToProduct
  }


}
