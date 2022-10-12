import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-social-btns',
  templateUrl: './social-btns.component.html',
  styleUrls: ['./social-btns.component.css']
})
export class SocialBtnsComponent implements OnInit {

  constructor() { }

  showScroll: boolean;
  showScrollHeight = 200;
  hideScrollHeight = 200;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      (
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      ) > this.showScrollHeight
    ) {
      this.showScroll = true;
    } else if (this.showScroll &&
      (
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) < this.hideScrollHeight
    ) {
      this.showScroll = false;
    }
  }


  ngOnInit(): void {
  }

}
