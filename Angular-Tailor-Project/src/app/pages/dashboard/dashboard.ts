import { Component } from '@angular/core';
import { Header } from './parts/header/header';
import { Footer } from './parts/footer/footer';
import { Sidenav } from './parts/sidenav/sidenav';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [Header, Footer, Sidenav, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {

}
