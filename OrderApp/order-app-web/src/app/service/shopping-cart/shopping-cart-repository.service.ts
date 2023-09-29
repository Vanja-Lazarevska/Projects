import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  CartProduct, CreatedProduct, DecrementInQuantity, DeleteCart } from 'src/app/interfaces/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartRepositoryService {
  private readonly URL = 'http://localhost:3000/cart'

  constructor(private readonly httpClient: HttpClient) { }

  decrementProductInCart = (productId: number, cartId: number) => {
    return this.httpClient.get<DecrementInQuantity>(`${this.URL}/${cartId}/product/${productId}`)
  }


   create ()  {
    const newCart = {
      createdAt: new Date()
    }
   return this.httpClient.post<number>(this.URL, newCart)
  }

  createOrder =  (productId: number, cartId: number) => {
    console.log('IDS BEFORE SENDING TO BACKEND', productId, cartId)
    const body = {productId, cartId}
    console.log(body)
    return this.httpClient.post<CreatedProduct>('http://localhost:3000/order', body) // za da se dodade u orders tabelu product ss ovoj id, i da mu se namali ordered property na sam produkt
  }

  getUserOrder =   (orerId: number) => {
    return this.httpClient.get<CartProduct[]>(`${this.URL}/products/${orerId}`)
  }

  getNumberOfOrders = (cartId: number)  => {
    return this.httpClient.get<number>(`${this.URL}/${cartId}/count`)
  }

  deleteAllCart = (cartId: number) => {
    return this.httpClient.delete<DeleteCart>(`${this.URL}/${cartId}`)
  }





}
