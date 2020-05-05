import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {}
}
