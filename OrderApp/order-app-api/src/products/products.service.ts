import { ConsoleLogger, Injectable, NotFoundException } from '@nestjs/common';
import { ProductEntity } from 'src/entities/products.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { Product } from 'src/interfaces/product.interface';


@Injectable()
export class ProductService {
  constructor(@InjectRepository(ProductEntity) private readonly productsRepository: Repository<ProductEntity>) {}

   async getAllProducts(): Promise<Product[]>{
    const products = await this.productsRepository.find()
    return products
  }

  async getAllProductsAuth(): Promise<Product[]>{
    const products = await this.productsRepository.find()
    console.log('PRODUCTS IN SERVICE', products)
    return products
  }

  async getProductByCategory(category: string): Promise<Product[]> {
    const productByCategory = await this.productsRepository.find({where: {category: category}})
    return productByCategory
  }

  async createProduct(product: Product) {
   const newProduct = this.productsRepository.create(product)
   const savedProduct = await this.productsRepository.save(newProduct)
  }

  async getProductById(productId: number){
    const product = this.productsRepository.findOne({
      where: {id: productId}    })
    return product
  }
  

  async deleteProduct(id: number) {
    const deletedProduct =  await this.productsRepository.delete({id:id})
  }

  async updateProduct(id: number, productDto: Product) {
    const updatedProduct: Product  ={
      ...productDto
     }

     const product = await this.productsRepository.preload({
      id: id,
      ...updatedProduct
  })

  if(!product) {
      throw new NotFoundException(`Product with id: ${id} was not found to update`)
  }
  console.log(product)
  await this.productsRepository.save(product)
  return product.id


  }

  decrement = async (productId: number) => {
    const product = await this.productsRepository.findOneBy({id: productId})
    // const decremented = await this.productsRepository.decrement(product, 'product.ordered', 1)
    // console.log(decremented)
    const theProduct = await this.productsRepository.createQueryBuilder().update(product).set({ordered: () => 'ordered - 1'}).execute()
    
    console.log(theProduct)

  }








}
