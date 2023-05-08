import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },

  {
    path: 'auth',
    component: SkeletonComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./modules/auth/auth.module').then((m) => m.AuthModule),
      },
      { path: '**', redirectTo: '/auth/login', pathMatch: 'full' },
    ],
  },

  // Ruta del módulo de home
  {
    path: 'home',
    component: SkeletonComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule)
      },

      {
        path:'categories-videos',
        loadChildren: () =>
        import('./modules/videos/videos.module').then((m) => m.VideosModule),
      },

      { path: '**', redirectTo: '/home', pathMatch: 'full' },
    ],
  },


  // Ruta para cualquier otra ruta no definida
  { path: '**', redirectTo: '/auth/login' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
