import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModalComponent} from '../product-modal/product-modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Input() appName: string;
  @Input() isMobile: boolean;
  @Output() changeLayoutValue: EventEmitter<boolean> = new EventEmitter();
  private layoutValue = true;
  public iconValue = 'view_module';

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  changeLayout(): void {
    this.iconValue = this.layoutValue ? 'view_list' : 'view_module';
    this.layoutValue = !this.layoutValue;
    this.changeLayoutValue.emit(this.layoutValue);
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
      console.log('The dialog was closed');
    });
  }
}
