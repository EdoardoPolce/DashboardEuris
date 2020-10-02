import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreServiceService} from '../../services/store-service.service';
import {Product} from '../../classes/product';
import {PageEvent} from '@angular/material/paginator';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.scss']
})
export class PanelListComponent implements OnInit, OnDestroy {

  public productsList: Product[];
  public productSubscription: Subscription;
  public pageSubscription: Subscription;
  public loaded: boolean;
  public pageEvent: PageEvent = {
    pageIndex: 1,
    pageSize: 6,
    length: null
  };
  public pageSizeOptions: number[] = [6, 12, 24, 48];
  public columnLayout: boolean;
  public layoutSub: Subscription;

  constructor(private storeService: StoreServiceService) {
  }

  ngOnInit(): void {
    this.layoutSub = this.storeService.columnLayout.subscribe(value => {
      this.columnLayout = value;
    });
    this.productSubscription = this.storeService.reloadEvent.subscribe(value => {
      this.storeService.getProductList('ijpxNJLM732vm8AeajMR', this.pageEvent.pageIndex, this.pageEvent.pageSize)
        .subscribe(products => {
            this.pageEvent.length = products.length;
            this.productsList = products.list;
            this.loaded = true;
          },
          error => {
            console.log(error);
          });
    });
  }

  public changePage(event: PageEvent): void {
    this.pageSubscription = this.storeService.getProductList('ijpxNJLM732vm8AeajMR', event.pageIndex + 1, event.pageSize)
      .subscribe(products => {
        this.pageEvent.pageIndex = event.pageIndex + 1;
        this.pageEvent.length = products.length;
        this.pageEvent.pageSize = event.pageSize;
        this.productsList = products.list;
      });
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
    if (this.pageSubscription) {
      this.pageSubscription.unsubscribe();
    }
    this.layoutSub.unsubscribe();
  }
}
