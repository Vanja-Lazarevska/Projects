import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';
import { CartComponent } from './components/cart/cart.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './components/table/table.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AuthGuard } from './guards/auth.guard';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NgIf} from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { CheckOutComponent } from './components/check-out/check-out.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    MyOrdersComponent,
    NotFoundComponent,
    ProductCardComponent,
    NavbarComponent,
    AddProductComponent,
    ProductDetailsComponent,
    CartComponent,
    AdminComponent,
    LoginComponent,
    TableComponent,
    EditProductComponent,
    RegisterComponent,
    CheckOutComponent,
  ],
  imports: [
    // prebaci gi svi ovija u poseban modul material-module i oni neka bidev u nizu ednu koja ke bide u imports i exports stavena i ke gu stavis samo tuj cel modul u imports na app module
    BrowserModule,
    MatSlideToggleModule,
    AppRoutingModule,
    MatButtonModule, 
    MatIconModule, 
    MatToolbarModule, 
    CommonModule,
    MatCardModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    HttpClientModule,
    MatBadgeModule,
    MatListModule,
    BrowserAnimationsModule,
    MatSidenavModule, 
    NgIf
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
