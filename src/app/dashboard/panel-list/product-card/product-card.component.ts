import {Component, Input, OnInit} from '@angular/core';
import {ProductDetail} from '../../../classes/product';
import {MatDialog} from '@angular/material/dialog';
import {ProductModalComponent} from '../../product-modal/product-modal.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: ProductDetail;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openModal(product: ProductDetail): void {
    const dialogRef = this.dialog.open(ProductModalComponent, {
      width: '250px',
      data: product
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
