import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  @Input() hideTreeImage;
  footerItems = [
    {
      label: "home",
      link: "/home",
    },
    {
      label: "about",
      link: "/about",
    },
    {
      label: "work",
      link: "/work",
    },
    {
      label: "contact",
      link: "/contact",
    },
    {
      label: "services",
      link: "/services",
    },
  ];

  constructor(private router: Router) {}

  navigate(url: string) {
    if (url) {
      this.router.navigateByUrl(url);
    }
  }

  ngOnInit() {}
}
