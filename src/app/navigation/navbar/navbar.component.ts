import { Component,HostListener } from '@angular/core';
import { TuiAppearance, TuiButton, TuiDataList, TuiDropdown, TuiDropdownOpen, TuiGroup, TuiIcon } from '@taiga-ui/core';
import {TuiNavigation} from '@taiga-ui/layout';
import {TuiChevron} from '@taiga-ui/kit';
@Component({
  selector: 'app-navbar',
  imports: [
    TuiNavigation,
    TuiButton,
    TuiIcon,
    TuiDropdown,
    TuiDropdownOpen,
    TuiChevron,
    TuiDataList,
    TuiGroup,
    TuiAppearance,

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.glassmorphism-navbar');
    if (window.scrollY > 20) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }
}
