import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { Home }                  from './home/home';
import { About }               from './about/about';

const appRoutes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: About },  { path: '', redirectTo: '/about', pathMatch: 'full' },
];

export const Route: ModuleWithProviders = RouterModule.forRoot(appRoutes);