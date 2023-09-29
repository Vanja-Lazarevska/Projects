import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Request,
  UseGuards,
  Body,
  Patch
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guard';
import { Product } from 'src/interfaces/product.interface';
import { AuthGuardGuard } from './guard/auth-guard/auth-guard.guard';
import { ProductService } from './products.service';


@Controller()
export class ProductController {
  constructor(private readonly productsService: ProductService) {}

  @Get('/products')
  async getProducts() {
    const products = await this.productsService.getAllProducts()
    return  products
  };
  
  @Post('/products/decrement')
  async decrementInStock(@Body() productId: number) {
    console.log('PRODUCTID SERVER SIDE',productId)
   const product = await this.productsService.decrement(productId)
    return {
      message: 'Product changed'
    }
  }
  @Post('/products/add-product')
  async createProduct(@Body() product:Product) {
    const newProduct = await this.productsService.createProduct(product)
    return {
      message: 'Product added'
    }
  }



  @Get('/products/auth') 
  // @UseGuards(AuthGuardGuard) 
  @UseGuards(JwtAuthGuard)
  async getProductsAuth(@Request() req) {
    console.log('WHAT IS THIS',req.user)

    const products = await this.productsService.getAllProductsAuth()
    console.log(products)
    return req.user 
  };



  @Get('/products/:category')
  async getByCategory(@Param('category') params: string) {
    const productByCategory = await this.productsService.getProductByCategory(params)
    return productByCategory
  }


  @Delete('/products/:id')
  async deleteProduct(@Param('id')productId: number) {
    const deletedProduct = await this.productsService.deleteProduct(productId)
    return {
      message: 'Product deleted'
    }
  }

  @Patch('/products/:id')
  async updateProduct(@Param('id') id:number, @Body() body: Product){
      const idOfProduct = await this.productsService.updateProduct(id, body)
      console.log(idOfProduct)

      return {
          message: 'Product was updated',
          id: idOfProduct
      }
  }





}
