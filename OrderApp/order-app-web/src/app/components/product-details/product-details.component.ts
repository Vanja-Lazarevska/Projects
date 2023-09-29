import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/service/products/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  product: Product

  @Input()
  name: string
  @Input()
  description: string
  @Input()
  price: string
  @Input()
  imageUrl: string
  @Input()
  inStock: string
  constructor(private readonly router: ActivatedRoute, private readonly productService: ProductsService){}


  ngOnInit(): void {
    this.router.params.subscribe(params => {
      const productId = +params['id']
      console.log(productId)

      this.product = this.productService.findById(productId)

    })
  }



  

}
