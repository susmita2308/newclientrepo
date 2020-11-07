import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FrontendComponent } from './layouts/frontend/frontend.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',component:BlankComponent },
 {path:'frontend', component:FrontendComponent, 
 children: [
  {
    path: '',
    loadChildren: () =>
      import('./features/frontend/frontend.module').then(
        (m) => m.FrontendModule
      ),
  },
], },

  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
