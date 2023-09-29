import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products/products.service';
import { ShoppingCartService } from 'src/app/service/shopping-cart/shopping-cart.service';
import { UsersService } from 'src/app/service/users/users.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, DoCheck{

  productsOrdered: number = 0
  isUserloggedIn: string | null
  opened: boolean = false

  constructor(private readonly cartService: ShoppingCartService, private readonly usersService: UsersService, private readonly router:Router  ){}
  ngOnInit(): void {
    this.cartService.numberOfAllOrders.subscribe((data)=> this.productsOrdered = data)
    this.cartService.getNumberOfOrders()  
  }

  ngDoCheck(): void {
    this.isUserloggedIn = localStorage.getItem('user')
  }


  handleLogout = () => {
    this.usersService.userLogout()
    this.router.navigate(['/'])
    
  }

  toggleSideNav = () => {
    this.opened = !this.opened
  }

}


