import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { SafePipe } from './components/hero-section/safe.pipe';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { MapSectionComponent } from './components/map-section/map-section.component';
import { MapSection2Component } from './components/map-section2/map-section2.component';
import { AccordingSliderComponent } from './components/according-slider/according-slider.component';
import { GrowthSectionComponent } from './components/growth-section/growth-section.component';
import { TransientSectionComponent } from './components/transient-section/transient-section.component';
import { LatestComponent } from './components/latest/latest.component';
import { CareersComponent } from './components/careers/careers.component';
import { FooterComponent } from './components/footer/footer.component';
import { LatestTradeComponent } from './components/latest-trade/latest-trade.component';
import { WatchDayComponent } from './views/watch-day/watch-day.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { SidebysideComponent } from './components/sidebyside/sidebyside.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { LogInComponent } from './views/log-in/log-in.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { SocialBtnsComponent } from './components/social-btns/social-btns.component';
import { SideSectionComponent } from './components/side-section/side-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroSectionComponent,
    SafePipe,
    ParallaxComponent,
    MapSectionComponent,
    MapSection2Component,
    AccordingSliderComponent,
    GrowthSectionComponent,
    TransientSectionComponent,
    LatestComponent,
    CareersComponent,
    FooterComponent,
    LatestTradeComponent,
    WatchDayComponent,
    ContactUsComponent,
    SidebysideComponent,
    SignUpComponent,
    LogInComponent,
    ScrollToTopComponent,
    SocialBtnsComponent,
    SideSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
