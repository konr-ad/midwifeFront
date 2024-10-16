import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isMobileMenuOpen: boolean = false;

  openMobileMenu() {
    console.log("Menu open")
    this.isMobileMenuOpen = true;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
