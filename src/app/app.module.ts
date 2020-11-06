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
import { MaterialModule } from './shared/material/material.module';
import { FrontendModule } from './features/frontend/frontend.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreComponent } from './core/core.component';
import { ResisterComponent } from './layouts/frontend/components/resister/resister.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { ProductsComponent } from './layouts/frontend/components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    FrontendComponent,
    AppLayoutComponent,
    PageNotFoundComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    CoreComponent,
    ResisterComponent,
    ProductsComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    LayoutModule,
    CoreModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    FrontendModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,

   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
