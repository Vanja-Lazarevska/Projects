import {  Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import  { ProductToAdd } from 'src/app/interfaces/productToAdd-interface';
import { ProductsRepositoryService } from './products.repository.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private readonly productsRepository: ProductsRepositoryService) {}

  _products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([])
  _productsAuth: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([])
  _productsByCategory: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([])

  getAllProducts = async () => {
    (await this.productsRepository.getProducts()).subscribe({
      next: (data: Product[]) => {
        this._products.next(data)
      },
      error: (error) => {console.log(error)}  
    })
  }

  getAllProductsAuth = () => {
    console.log('1')
    this.productsRepository.getProductsAuth().subscribe({
      next: (data: Product[]) => {
        console.log('DATA THAT WE ARE STORING',data)
        this._productsAuth.next(data)
      },
      error: (error) => {console.log(error)}  
    })
  }

  getProductsByCategory = async (category: string) => {
    (await this.productsRepository.getProductsbyCategory(category)).subscribe({
      next: (data: Product[]) => {
        this._productsByCategory.next(data)
      },
      error: (error) => {console.log(error)}
    })
  }

  deleteProduct = async (productId: number) => {
   (await this.productsRepository.deleteProduct(productId)).subscribe((data)=> {
    console.log(data)
   })
  }

  updateProduct = async (productId:number, productBody: Product) =>{
    (await this.productsRepository.updateProduct(productId, productBody)).subscribe((data)=>{
      console.log(data)
    })

  }


// -------------------------------------------------------------------------------------






  decrementInStock = async (orderId: number)  => {  
    // (await this.productsRepository.decrementInStock(orderId)).subscribe((data) => {
    //   console.log(data)})
    this._products.value.map((order)=> {
      if(order.id === orderId && order.stock !== 0) {
      order.stock  = order.stock - 1
      order.ordered = order.ordered + 1
       return order
      }

      return order
    })

  }



  findById = (orderId: number): Product  => {
   const foundOrder = this._products.getValue().find((product)=> product.id === orderId)

   if(!foundOrder){
    console.log('No order')
   }
   return foundOrder as Product

  }




  addProductInDb = async (product: Product) => {
 (await this.productsRepository.createProduct(product)).subscribe((data)=> {
  console.log(data)
})
  //   const index = this._products.length
  //   const idOfProduct = index + 1
  //   const newProductToAdd: Product = {
  //     id: idOfProduct,
  //     ...product,
  //     imageUrl: '',
  //     ordered: 0
  //   }
  //   this._products.push(newProductToAdd)

  }

   
}
