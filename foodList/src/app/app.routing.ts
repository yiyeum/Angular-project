import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { Home }                  from './home/home';
import { Details }               from './details/details';

const appRoutes: Routes = [
  { path: 'home', component: Home },
  { path: 'details', component: Details },  { path: '', redirectTo: '/details', pathMatch: 'full' },
];

export const Route: ModuleWithProviders = RouterModule.forRoot(appRoutes);