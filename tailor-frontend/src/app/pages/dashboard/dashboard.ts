import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './parts/header/header';
import { Sidenav } from './parts/sidenav/sidenav';
import { Footer } from './parts/footer/footer';

@Component({
  selector: 'app-dashboard',
    imports: [
    RouterOutlet,
    Header,
    Sidenav,
    Footer 
  ],
  templateUrl: 'dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {

}
