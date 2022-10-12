import { Component, OnInit } from '@angular/core';
import {
  fadeInRightOnEnterAnimation,
  fadeOutRightOnLeaveAnimation,
  fadeInUpOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    fadeInRightOnEnterAnimation(),
    fadeOutRightOnLeaveAnimation(),
    fadeInUpOnEnterAnimation({ anchor: 'enter1', translate: '100%',delay: 250 })
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showUl:boolean = false
  sub:boolean = false

  DIGITAL:boolean = true
  ECONOMIC:boolean = false
  LOGISTICS:boolean = false
  MARITME:boolean = false
  PORTS:boolean = false
  search:boolean = false
  recents:boolean = false
  dig() {
    if(this.sub == true &&this.ECONOMIC == false&&this.LOGISTICS == false&&this.MARITME == false&&this.PORTS == false) this.DIGITAL = true
    else this.DIGITAL = false
  }
}
