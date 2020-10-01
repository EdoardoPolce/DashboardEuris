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

  constructor() {
  }

  ngOnInit(): void {
  }

  changeLayout(): void {
    this.layoutValue = !this.layoutValue;
    this.changeLayoutValue.emit(this.layoutValue);
  }

}
