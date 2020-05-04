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
      link: "/",
    },
    {
      label: "about",
      link: "/",
    },
    {
      label: "work",
      link: "/",
    },
    {
      label: "contact",
      link: "/",
    },
    {
      label: "services",
      link: "/",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
