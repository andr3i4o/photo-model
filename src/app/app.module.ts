import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularDualListBoxModule } from 'angular-dual-listbox';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NeedAuthGuard } from './auth.guard';
import { UserEditComponent } from './user-edit/user-edit.component';


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
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    LoginModule,
    DashboardModule,
    FormsModule,
    HttpClientModule,
    AngularDualListBoxModule
  ],
  providers: [
    NeedAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
