import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, switchMap, tap } from 'rxjs';
import { CartProduct } from 'src/app/interfaces/cart.interface';
import { ShoppingCartRepositoryService } from './shopping-cart-repository.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  userOrders: BehaviorSubject<CartProduct[]> = new BehaviorSubject<CartProduct[]>([])
  // numberOfUserOrders: Subject<number> = new Subject<number>()
  numberOfAllOrders: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  quantityOfEachUserProduct: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  deleted: BehaviorSubject<string> = new BehaviorSubject<string>('')

  constructor(private readonly cartRepository: ShoppingCartRepositoryService) {}

  decrementProductInCart (productId: number, cartId:number) {
    this.cartRepository.decrementProductInCart(productId, cartId).subscribe((data)=> {
      this.quantityOfEachUserProduct.next(data.cart.quantity)
      console.log(data)}
      )
  }

  private  create ()  {
   return this.cartRepository.create()
  }

   cartCreateOrGet () {
    let cartIdOfUser = localStorage.getItem('cartId')
   
    if(!cartIdOfUser) {
      return this.create().pipe(
        tap((data) => {
          localStorage.setItem('cartId', data.toString())
        })
      )
    }  else {
      return +cartIdOfUser 
    } 
  }

   createOrder (productId: number) {
    let cartIdFromMethod =  this.cartCreateOrGet()
    if (typeof cartIdFromMethod ===  'number'){
      this.cartRepository.createOrder(productId, cartIdFromMethod).subscribe((data) => {
        this.getNumberOfOrders()

      } )  
    }else{
      cartIdFromMethod.pipe(
        switchMap((data) => {
          return this.cartRepository.createOrder(productId, data)
        })
      ).subscribe((data)=> {
        this.getNumberOfOrders()
        console.log('CARTiD',data)})
    }
  }

    getOrderOfUser () {
    const id = localStorage.getItem('cartId');
    if(!id) {
      return {
        message: 'No cartId'
      }
    } else {
        this.cartRepository.getUserOrder(+id).subscribe(data=> {
        this.userOrders.next(data)
      } )
    }
    return
  }

  getNumberOfOrders () {
    const cartId = localStorage.getItem('cartId')!
    this.cartRepository.getNumberOfOrders(+cartId).subscribe((data)=> this.numberOfAllOrders.next(data))
  }

  deleteAllCart () {
    const cartId = localStorage.getItem('cartId')!
    this.cartRepository.deleteAllCart(+cartId).subscribe((data)=> {
      this.deleted.next(data.message)
      console.log(data)})
  }





}
