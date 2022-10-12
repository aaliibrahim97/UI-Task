import { Component, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import {
  bounceInDownOnEnterAnimation,
  bounceInUpOnEnterAnimation,
  bounceOutUpOnLeaveAnimation,
} from 'angular-animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    bounceInDownOnEnterAnimation(),
    bounceInUpOnEnterAnimation(),
    bounceOutUpOnLeaveAnimation(),
  ],
})
export class AppComponent {
  title = 'cm-tool';

  header:boolean = false

  constructor(public router: Router){}  

  ngOnInit(){
    this.router.events.subscribe(() => {
      this.router.events.subscribe(() => {
        if(this.router.url === "/") this.header = false
        else this.header = true
      });
    })
  }
  
  dark:boolean = false;
  
  darkAlert:boolean = false;
  
  white:boolean = true;

  lightAlert:boolean = false

  toggleTheme(theme:string) {

    if(theme === "dark") {
      this.dark = true
      this.white = false
      localStorage.removeItem('theme')
      localStorage.setItem('theme',theme)
      this.darkAlert = true
      setTimeout(()=>{
        this.darkAlert = false
      },2000)
    } else {
      this.dark = false
      this.white = true
      localStorage.removeItem('theme')
      localStorage.setItem('theme',theme)
      this.lightAlert = true
      setTimeout(()=>{
        this.lightAlert = false
      },2000)
    }
  }

}
