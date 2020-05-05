import { Component, Input, OnInit } from '@angular/core';
import { MainMenuService } from '../../services/main-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() theme = 'dark';
  @Input() data;

  constructor(private menuService: MainMenuService) { }

  ngOnInit(): void {
  }

  openMenu() {
    this.menuService.setShowMenuValue(true);
  }

}
