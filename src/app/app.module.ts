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
// import { CategoriesComponent } from './layouts/frontend/components/categories/categories.component';
// import { LoginComponent } from './layouts/frontend/components/login/login.component';
// import { CartComponent } from './layouts/frontend/components/cart/cart.component';
import { MaterialModule } from './shared/material/material.module';
import { FrontendModule } from './features/frontend/frontend.module';
import { FrontendRoutingModule } from './features/frontend/frontend-routing.module';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CoreComponent } from './core/core.component';
import { ResisterComponent } from './layouts/frontend/components/resister/resister.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { MatInputModule } from '@angular/material/input';
import { CategoriesComponent } from './layouts/frontend/components/categories/categories.component';
import { ImageSliderComponent } from './shared/components/image-slider/image-slider.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

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
    CategoriesComponent,
    ImageSliderComponent
    // CategoriesComponent,
    // LoginComponent,
    // CartComponent,
    
   
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
    CarouselModule.forRoot()
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
