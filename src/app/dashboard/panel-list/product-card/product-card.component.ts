import {Component, Input, OnInit} from '@angular/core';
import {Product, ProductDetail} from '../../../classes/product';
import {MatDialog} from '@angular/material/dialog';
import {ProductModalComponent} from '../../product-modal/product-modal.component';
import {StoreServiceService} from '../../../services/store-service.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;

  constructor(public dialog: MatDialog, private storeService: StoreServiceService) {
  }

  ngOnInit(): void {
  }

  deleteProduct(product: Product): void {
    const dialogRef = this.dialog.open(ProductModalComponent, {
      minWidth: '250px',
      maxWidth: '500px',
      data: {
        title: 'Elimina Prodotto',
        productData: product,
        type: 'delete'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.storeService.reloadEvent.next(true);
    });
  }

}
