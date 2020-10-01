import {Component, Input, OnInit} from '@angular/core';
import {StoreServiceService} from '../../services/store-service.service';
import {Product} from '../../classes/product';

@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.scss']
})
export class PanelListComponent implements OnInit {

  public productsList: Product[];
  public loaded: boolean;
  @Input() columnLayout: boolean;

  constructor(private storeService: StoreServiceService) {
  }

  ngOnInit(): void {
    this.storeService.getProductList('ijpxNJLM732vm8AeajMR').subscribe(products => {
        this.productsList = products;
        this.loaded = true;
      },
      error => {
        console.log(error);
      }
    );
  }

}
