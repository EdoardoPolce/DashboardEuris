import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreServiceService} from '../services/store-service.service';
import {Subscription, combineLatest} from 'rxjs';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  private storeSub: Subscription;
  public appName: string;
  public isMobile: boolean;
  public columnLayout = true;
  public chart: Chart = [];

  constructor(private storeService: StoreServiceService) {
  }

  ngOnInit(): void {
    this.storeSub = combineLatest([this.storeService.getStoreData('ijpxNJLM732vm8AeajMR'),
      this.storeService.getStats('ijpxNJLM732vm8AeajMR')])
      .subscribe(([data, graph]) => {
        this.appName = data.name;

        const graphProducts = [];
        const graphCategory = [];

        graph.forEach(value => {
          graphProducts.push(value.numberOfProducts);
          graphCategory.push(value.category);
        });

        console.log(graphProducts);

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
      });
  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }

  public changeLayout(event): void {
    this.columnLayout = event;
  }
}
