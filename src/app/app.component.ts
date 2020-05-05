import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { MainMenuService } from './shared/services/main-menu.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  @ViewChild("sidenav") sidenav: MatSidenav;
  title = "radiant";
  isMenuOpened = false;

  constructor(private menuService: MainMenuService) {}

  ngOnInit() {
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
