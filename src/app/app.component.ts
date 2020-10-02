import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreServiceService} from './services/store-service.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  private storeSub: Subscription;
  public appName: string;
  public isMobile: boolean;

  constructor(private storeService: StoreServiceService) {
  }

  public changeLayout(event): void {
    this.storeService.columnLayout.next(event);
  }

  ngOnInit(): void {
    this.storeSub = (this.storeService.getStoreData('ijpxNJLM732vm8AeajMR')).subscribe((data) =>
      this.appName = data.name,
    error => {
      console.log(error);
    });
  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }
}


