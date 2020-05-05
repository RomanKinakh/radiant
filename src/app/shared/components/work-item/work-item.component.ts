import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-work-item",
  templateUrl: "./work-item.component.html",
  styleUrls: ["./work-item.component.scss"],
})
export class WorkItemComponent implements OnInit {
  @Input() work;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(link: string) {
    if (link) {
      this.router.navigateByUrl(link);
    }
  }
}
