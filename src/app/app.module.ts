import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesingModule } from './material-desing/material-desing.module';

import { DashboardComponent } from './pages/app/dashboard/dashboard.component';
import { HomeComponent } from './pages/app/home/home.component';
import { WelcomeComponent } from './pages/app/welcome/welcome.component';
import { SitesComponent } from './pages/app/sites/sites.component';
import { SitesNewComponent } from './pages/app/sites/new/new.component';
import { SitesEditComponent } from './pages/app/sites/edit/edit.component';

/*Component*/
import { NavbarComponent } from './component/navbar/navbar.component';
import { TablesComponent } from './component/table/table.component';
import { AlertComponent } from './component/alert/alert.component';
import { SearchComponent } from './component/search/search.component';
import { ExportComponent } from './component/export/export.component';
import { FooterComponent } from './component/footer/footer.component';

import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TablesComponent,
    AlertComponent,
    SearchComponent,
    ExportComponent,
    FooterComponent,

    DashboardComponent,
    HomeComponent,
    WelcomeComponent,
    SitesComponent,
    SitesNewComponent,
    SitesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
