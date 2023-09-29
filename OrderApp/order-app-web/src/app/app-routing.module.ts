import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { CheckOutComponent } from './components/check-out/check-out.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products/:category', component: ProductsComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'check-out', component: CheckOutComponent},   // canActivate:[AuthGuard] stavi ga na checkOut kd ke ga sredis
  {path: 'login',component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: AdminComponent, canActivate:[AuthGuard]},
  {path: 'admin/edit-product/:id', component: EditProductComponent, canActivate:[AuthGuard]},

  {path: '**', component: NotFoundComponent}
  ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
