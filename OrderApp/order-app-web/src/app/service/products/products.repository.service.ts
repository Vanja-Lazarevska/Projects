import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../../interfaces/product.interface";
import { HttpHeaders } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class ProductsRepositoryService {

    private readonly URL = 'http://localhost:3000/products'
    constructor(private readonly httpClient: HttpClient){}

    getProducts = async () => {
        return this.httpClient.get<Product[]>(this.URL)
    }
    decrementInStock = async(productId: number) => {
        return this.httpClient.post<number>(`${this.URL}/decrement`, productId)
    }

    getProductsAuth =  () => {
        console.log('2')
        const token = localStorage.getItem('user')

        // const headers = new HttpHeaders().append('Authorization', `Bearer ${token}` )
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          })

        console.log(' HEADERS',headers) 
        return this.httpClient.get<Product[]>(`${this.URL}/auth`, {headers: headers})
    }

    
    getProductsbyCategory = async (category: string) => {
        return this.httpClient.get<Product[]>(`${this.URL}/${category}`)
    }

    createProduct = async (product: Product) => {
        return this.httpClient.post<Product>(`${this.URL}/add-product`, product)
    }

    deleteProduct = async(productId: number) => {
        return this.httpClient.delete(`${this.URL}/${productId}` )
    }

    updateProduct = async(productId: number, product:Product) => {
        return this.httpClient.patch(`${this.URL}/${productId}`, product)
    }

   
 

 
}