import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Product, ProductDetail} from '../../classes/product';
import {StoreServiceService} from '../../services/store-service.service';
import {Subscription} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {environment} from '../../../environments/environment';

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
              private fb: FormBuilder, private toast: ToastrService) {
  }

  ngOnInit(): void {
    if (this.data.productData) {
      this.product = this.data.productData;
    }
    if (this.data.type !== 'delete') {
      this.productForm = this.fb.group({
        title: new FormControl('', Validators.required),
        category: new FormControl('', Validators.required),
        price: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
        employee: new FormControl('', Validators.required),
        description: new FormControl(''),
      });
    }
  }

  public deleteProduct(id): void {
    this.deleteProductSub = this.storeService.deleteProduct(environment.idStore, id).subscribe(() => {

      this.toast.success('Prodotto cancellato');
      this.dialogRef.close('productDeleted');
    }, error => {
      this.toast.error('Qualcosa è andato storto, Riprova');
    });
  }

  public formSubmit(form: FormGroup): void {
    const product: ProductDetail = form.getRawValue();
    this.storeService.addProduct(environment.idStore, product).subscribe(() => {
        this.toast.success('Prodotto aggiunto');
        this.dialogRef.close('productAdded');
      },
      error => {
        if (error.status === 200) {
          this.toast.success('Prodotto aggiunto');
          this.dialogRef.close('productAdded');
        } else {
          this.toast.error('Qualcosa è andato storto, Riprova');
          this.dialogRef.close();
        }
      }
    );
  }

  ngOnDestroy(): void {
    if (this.deleteProductSub) {
      this.deleteProductSub.unsubscribe();
    }
  }
}
