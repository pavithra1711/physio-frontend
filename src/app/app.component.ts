import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'physio-frontend';

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  <nav class="navbar">

  <img src="assets/logo.svg" class="logo">

  <!-- Hamburger -->
  <div class="menu-icon" (click)="toggleMenu()">
    ☰
  </div>

  <!-- Menu -->
  <ul class="nav-links" [class.active]="menuOpen">
    <li><a (click)="closeMenu()" href="#home">Home</a></li>
    <li><a (click)="closeMenu()" href="#services">Services</a></li>
    <li><a (click)="closeMenu()" href="#contact">Contact Us</a></li>
    <li><a (click)="closeMenu()" href="#about">About Us</a></li>
  </ul>

</nav>
}