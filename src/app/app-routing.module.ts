import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { HomeComponent } from './views/home/home.component';
import { LogInComponent } from './views/log-in/log-in.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { WatchDayComponent } from './views/watch-day/watch-day.component';

const routes: Routes = [

  {path:'', component: HomeComponent},
  {path:'passApplication', component: WatchDayComponent},
  {path:'contactUs', component: ContactUsComponent},
  {path:'logIn', component: LogInComponent},
  {path:'signUp', component: SignUpComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
