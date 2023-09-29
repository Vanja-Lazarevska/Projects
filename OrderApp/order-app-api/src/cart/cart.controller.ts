import {
    Controller,
    Get,
    Post,
    Delete,
    Param,
    Request,
    UseGuards,
    Body,
    Patch,
    Put
  } from '@nestjs/common';
import { BodyDto, Cart } from 'src/interfaces/cart.interface';
import { CartService } from './cart.service';


@Controller('cart')
export class CartController {

    constructor(private readonly cartService: CartService){}
    
    @Post()
    async createCart (@Body() cart: Cart) {
        const newCart = await this.cartService.createCart(cart)
        console.log(newCart)
        return newCart

    }

    @Get('/:cartId')
    async getOrderOfUser(@Param('cartId') cartId: number) {
        const cart = await this.cartService.getCartOfUser(cartId)
        return cart

    }





}
