import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/app/dashboard/dashboard.component';
import { HomeComponent } from './pages/app/home/home.component';
import { WelcomeComponent } from './pages/app/welcome/welcome.component';
import { SitesComponent } from './pages/app/sites/sites.component';
import { SitesNewComponent } from './pages/app/sites/new/new.component';
import { SitesEditComponent } from './pages/app/sites/edit/edit.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "home/:feedback",
    component: HomeComponent
  },
  {
    path: "welcome",
    component: WelcomeComponent
  },

  {
    path: "sites",
    component: SitesComponent
  },
  {
    path: "sites/new",
    component: SitesNewComponent
  },
  {
    path: "sites/edit",
    component: SitesEditComponent
  },

  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "registro",
    component: RegisterComponent
  },
  {
    path: "**",
    redirectTo: "DashboardComponent"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
