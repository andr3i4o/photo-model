import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NeedAuthGuard } from './auth.guard';
import { UserEditComponent } from './user-edit/user-edit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReservationsComponent } from './reservations/reservations.component';


const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [NeedAuthGuard]
  },
  {
    path: 'user-edit',
    component: UserEditComponent,
    canActivate: [NeedAuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reservations',
    component: ReservationsComponent
  },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    UserEditComponent,
    NavbarComponent,
    DashboardComponent,
    ReservationsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    AngularDualListBoxModule,
    DlDateTimePickerDateModule
  ],
  providers: [
    NeedAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
