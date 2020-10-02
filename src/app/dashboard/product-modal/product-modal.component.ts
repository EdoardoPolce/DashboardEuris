import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Product, ProductDetail} from '../../classes/product';
import {StoreServiceService} from '../../services/store-service.service';
import {Subscription} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit, OnDestroy {

  public product: Product;
  public deleteProductSub: Subscription;
  public productForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<ProductModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private storeService: StoreServiceService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    if (this.data.productData) {
      this.product = this.data.productData;
    }
    if (this.data.type !== 'delete') {
      this.productForm = this.fb.group({
        title: new FormControl('', Validators.required),
        category: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        employee: new FormControl('', Validators.required),
        description: new FormControl(''),
      });
    }
  }

  public deleteProduct(id): void {
    this.deleteProductSub = this.storeService.deleteProduct('ijpxNJLM732vm8AeajMR', id).subscribe(() =>
        this.dialogRef.close('productDeleted')
      , error => {
        console.log(error);
      });
  }

  public formSubmit(form: FormGroup): void {
    const product: ProductDetail = form.getRawValue();
    this.storeService.addProduct('ijpxNJLM732vm8AeajMR', product).subscribe(() =>
        this.dialogRef.close('productAdded'),
      error => {
        this.dialogRef.close('productAdded?');
      }
    );
  }

  ngOnDestroy(): void {
    if (this.deleteProductSub) {
      this.deleteProductSub.unsubscribe();
    }
  }
}
