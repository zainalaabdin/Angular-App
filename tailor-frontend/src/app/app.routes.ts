import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { MainComponent } from './pages/dashboard/childern/main-component/main-component';

export const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  { path: 'dashboard', component: DashboardComponent,  canActivate: [AuthGuard],
     children: [
      { path: '', component: MainComponent },
    ]
   },
  { path: '**', redirectTo: '' }   
  
];
