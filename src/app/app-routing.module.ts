import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component';
import { PageNotFoundComponent } from './component/pagenotfound/pagenotfound.component';

const routes: Routes = [
  
  {
    path:'authorDetails',
    component:LayoutComponent
  },
  {
    path:'',
    redirectTo: 'authorDetails',
    pathMatch: 'full' 
  },
  { 
    path: '**',
    component: PageNotFoundComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
