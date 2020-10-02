import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModalComponent} from '../product-modal/product-modal.component';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {StoreServiceService} from '../../services/store-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Input() appName: string;
  @Input() isMobile: boolean;
  @Output() changeLayoutValue: EventEmitter<boolean> = new EventEmitter();
  public hideButton;
  private layoutValue = true;
  public iconValue = 'view_module';

  constructor(public dialog: MatDialog, public router: Router, private storeService: StoreServiceService) {
  }

  ngOnInit(): void {
    this.storeService.pageUrl.subscribe(value => {
      this.hideButton = value === 'grafici';
    });
  }

  changeLayout(): void {
    this.iconValue = this.layoutValue ? 'view_list' : 'view_module';
    this.layoutValue = !this.layoutValue;
    this.changeLayoutValue.emit(this.layoutValue);
  }

  public goToGraph(): void {
    this.hideButton = true;
    this.router.navigate(['/grafici']);
  }

  public goToHome(): void {
    this.hideButton = false;
    this.router.navigate(['/']);
  }

  openModal(): void {
    const dialogRef = this.dialog.open(ProductModalComponent, {
      minWidth: '250px',
      maxWidth: '500px',
      data: {
        title: 'Aggiungi Prodotto',
        type: 'new'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.storeService.reloadEvent.next(true);
      }
    });
  }
}
