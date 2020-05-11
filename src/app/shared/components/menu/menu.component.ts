import { Component, OnInit } from '@angular/core';
import { MainMenuService } from '../../services/main-menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  navigationMenu = [
    {
      label: 'home',
      link: '/home'
    },
    {
      label: 'work',
      link: '/work'
    },
    {
      label: 'services',
      link: '/services'
    },
    {
      label: 'about',
      link: '/about'
    },
    {
      label: 'contact',
      link: '/contact'
    },
    ];

  menuText = "We engineer human experiences.";

  constructor(private menuService: MainMenuService) { }

  ngOnInit(): void {
  }

  closeMenu() {
    this.menuService.setShowMenuValue(false);
  }

}
