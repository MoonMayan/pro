import { NgClass, NgFor } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ opacity: 0, height: 0 }),
        animate('260ms cubic-bezier(0.16,1,0.3,1)', style({ opacity: 1, height: '*' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, height: 0 })),
      ]),
    ]),
  ],
})
export class NavbarComponent {
  scrolled = false;
  menuOpen = false;
  isDark = true;

  links: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/products' },
    { label: 'Collections', href: '/collections' },
    { label: 'Contact', href: '/contact' },
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled = window.scrollY > 12;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    // Hook this up to your actual theme service / body class here, e.g.:
    // document.body.classList.toggle('light-theme', !this.isDark);
  }
}