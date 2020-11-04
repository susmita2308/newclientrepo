import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BlankComponent } from './layouts/blank/blank.component';
import { FrontendComponent } from './layouts/frontend/frontend.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LayoutModule } from '@angular/cdk/layout';

import { SharedModule } from './shared/shared.module';
import { CategoriesComponent } from './layouts/frontend/components/categories/categories.component';
import { LoginComponent } from './layouts/frontend/components/login/login.component';
import { CartComponent } from './layouts/frontend/components/cart/cart.component';
import { MaterialModule } from './shared/material/material.module';
import { FrontendModule } from './features/frontend/frontend.module';
import { FrontendRoutingModule } from './features/frontend/frontend-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    FrontendComponent,
    AppLayoutComponent,
    PageNotFoundComponent,
    FooterComponent,
    HeaderComponent,
    CategoriesComponent,
    LoginComponent,
    CartComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    LayoutModule,
    MaterialModule,
    SharedModule,
    FrontendModule,
    FrontendRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
