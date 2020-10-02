import {Component, Input, OnInit} from '@angular/core';
import {StoreServiceService} from '../../services/store-service.service';
import {Product} from '../../classes/product';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.scss']
})
export class PanelListComponent implements OnInit {

  public productsList: Product[];
  public loaded: boolean;
  public pageEvent: PageEvent = {
    pageIndex: 1,
    pageSize: 6,
    length: null
  };
  public pageSizeOptions: number[] = [6, 12, 24, 48];
  public pageLoading: boolean;
  @Input() columnLayout: boolean;

  constructor(private storeService: StoreServiceService) {
  }

  ngOnInit(): void {
    this.storeService.getProductList('ijpxNJLM732vm8AeajMR', this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe(products => {
        this.pageEvent.length = products.length;
        this.productsList = products.list;
        this.loaded = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  public changePage(event: PageEvent): void {
    this.storeService.getProductList('ijpxNJLM732vm8AeajMR', event.pageIndex + 1, event.pageSize).subscribe(products => {
      this.pageEvent.length = products.length;
      this.productsList = products.list;
    });
  }

}
