import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

import { CartComponent } from 'src/app/layouts/frontend/components/cart/cart.component';
import { CategoriesComponent } from 'src/app/layouts/frontend/components/categories/categories.component';
import { LoginComponent } from 'src/app/layouts/frontend/components/login/login.component';
import { OrdersComponent } from 'src/app/layouts/frontend/components/orders/orders.component';
import { ResisterComponent } from 'src/app/layouts/frontend/components/resister/resister.component';

const routes: Routes = [
  {path:'login', component: LoginComponent },
  {path:'cart', component: CartComponent },
  {path:'categories', component: CategoriesComponent },
  {path:'register', component: ResisterComponent },
  {path:'orders', component:OrdersComponent },
  {path:'dashboard', component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
