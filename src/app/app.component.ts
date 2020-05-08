import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { MainMenuService } from './shared/services/main-menu.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  @ViewChild("sidenav") sidenav: MatSidenav;
  title = "radiant";
  isMenuOpened = false;
  hideTreeImage = false;

  constructor(private menuService: MainMenuService, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.hideTreeImage = evt.url === '/contact';
      window.scrollTo(0, 0)
    });
    this.menuService.getShowMenuValue().subscribe((value: boolean) => {
      if (value) {
        this.open();
      } else {
        this.close();
      }
    })
  }
  close() {
    this.isMenuOpened = false;
    this.sidenav.close();
  }

  open() {
    this.isMenuOpened = true;
    this.sidenav.open();
  }
}
