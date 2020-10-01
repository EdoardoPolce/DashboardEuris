import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProductDetail} from '../../classes/product';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProductModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ProductDetail) {
  }

  ngOnInit(): void {
    console.log(this.data);
  }

}
