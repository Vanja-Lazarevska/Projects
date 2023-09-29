import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  constructor(private readonly productsService: ProductsService, private readonly router: Router, private readonly routerActive:ActivatedRoute){}

  editForm: FormGroup
  id:number
  productName: string = ''
  productDescription: string = ''
  productPrice: string = ''
  productImage: string = ''
  productInStock: string = ''


  ngOnInit(): void {
    this.initForm()
  }

  initForm = () => {
    this.editForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl('', Validators.max(100)),
      price: new FormControl('', Validators.min(1)),
      category: new FormControl({value: '', disabled: true}),
      imageUrl: new FormControl(''),
      stock: new FormControl('',  Validators.min(1)),
      ordered: new FormControl({value:0, disabled:true})
    })
  }

  handleSubmit =() => {
    console.log(this.editForm.getRawValue())

    this.routerActive.params.subscribe((data)=> {
      this.id = data['id']
    })

    this.productsService.updateProduct(this.id, this.editForm.getRawValue())

    this.editForm.reset()

    this.router.navigate(['/admin'])  


    // NOT workingggggggggggggg
    


  }
}
