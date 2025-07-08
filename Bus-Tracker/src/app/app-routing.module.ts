import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


//? whenever you create new children make sure that their parents are added to this path otherwise you keep getting errors

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',  // Points to tabs as entry
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    redirectTo: 'alerts',
    pathMatch: 'full'
  },
  {
    path: 'alerts',
    loadChildren: () => import('./tabs/alerts/alerts.module').then(m=> m.AlertsPageModule) //this was missing and was causing errors
  },
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: () => import('./tabs/profile/profile.module').then(m=> m.ProfilePageModule) //! added this so that the settings page can have settings
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
