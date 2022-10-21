import { Component, OnInit, Renderer2 } from '@angular/core';
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  animations: [
    fadeInOnEnterAnimation({ anchor: 'enter1',delay: 250 }),
    fadeOutOnLeaveAnimation(),
  ]
})
export class HeroSectionComponent implements OnInit {


  public selected = false;

  public sections = 4;

  public scroll = 0;

  iframe:boolean = false
  
  constructor(private renderer: Renderer2) {}
  
  src:string ='https://www.youtube.com/embed/jHGrea2uypI'
  
  ngOnInit(): void {
    this.renderer.listen(window, 'scroll', ($event) => {
      this.scroll = window.scrollY / this.sections;
    });
  }

}
