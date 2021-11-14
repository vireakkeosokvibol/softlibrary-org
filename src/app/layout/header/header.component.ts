import { Component, HostListener, OnInit } from '@angular/core';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],

})
export class HeaderComponent implements OnInit {
  visible = false;
  showBtn = false;
  showMenu = true;
  placement: NzDrawerPlacement = 'right';
  getScreenWidth: any;
  open(): void {
    this.visible = true;

  }

  close(): void {
    this.visible = false;
  }

  constructor() { }
  // Listen To Window Resize
  @HostListener('window:resize', ['$event'])

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    console.log(this.getScreenWidth)
    if (this.getScreenWidth < 1006) {
      this.showBtn = true;
      this.showMenu = false;
    } else {
      this.showBtn = false;
      this.showMenu = true;
    }
  }
}
