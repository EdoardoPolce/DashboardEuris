import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

  constructor() {
  }

  ngOnInit(): void {
  }

  changeLayout(): void {
    this.iconValue = this.layoutValue ? 'view_list' : 'view_module';
    this.layoutValue = !this.layoutValue;
    this.changeLayoutValue.emit(this.layoutValue);
  }

}
