import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/home/login',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: SkeletonComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: '**',
        redirectTo: '/home/login',
        pathMatch: 'full'
      },
    ]
  },

  {
    path: 'home',
    redirectTo:'home'
  },

  {
    path: '**',
    redirectTo: '/home/login',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
