import {Component, OnInit} from '@angular/core';
import {StoreServiceService} from '../services/store-service.service';
import * as Chart from 'chart.js';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../environments/environment';


@Component({
  selector: 'app-product-graph',
  templateUrl: './product-graph.component.html',
  styleUrls: ['./product-graph.component.scss']
})
export class ProductGraphComponent implements OnInit {

  public chart: any = [];
  public loaded: boolean;

  constructor(private storeService: StoreServiceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.storeService.pageUrl.next(this.route.snapshot.url[0].path);
    this.storeService.getStats(environment.idStore).subscribe(graph => {
        const graphProducts = [];
        const graphCategory = [];

        graph.forEach(value => {
          graphProducts.push(value.numberOfProducts);
          graphCategory.push(value.category);
        });

        const graphData = {
          datasets: [{
            data: graphProducts,
            backgroundColor: [
              'red',
              'blue',
              'green',
              'purple',
              'yellow',
              'orange'
            ]
          }],
          labels: graphCategory
        };

        this.chart = new Chart('canvas', {
          data: graphData,
          type: 'polarArea',
        });
        this.loaded = true;
      }, error => {
        this.loaded = true;
      }
    );
  }

}
