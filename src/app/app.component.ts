import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreServiceService} from './services/store-service.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private storeSub: Subscription;
  public appName: string;
  public isMobile: boolean;
  public loaded: boolean;

  constructor(private storeService: StoreServiceService) {
  }

  public changeLayout(event): void {
    this.storeService.columnLayout.next(event);
  }

  ngOnInit(): void {
    this.storeSub = (this.storeService.getStoreData(environment.idStore)).subscribe((data) => {
        this.loaded = true;
        this.appName = data.name;
      },
      error => {
        this.loaded = true;
      });
  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }
}


