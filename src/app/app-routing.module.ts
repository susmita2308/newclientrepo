import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FrontendComponent } from './layouts/frontend/frontend.component';

const routes: Routes = [
  // {path:'', component:BlankComponent},
  {path:'',component:FrontendComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
