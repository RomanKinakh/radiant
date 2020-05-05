import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.scss"],
})
export class WorkComponent implements OnInit {
  headerData = {
    title: "work",
    description:
      "Our web and native mobile applications are constructed to scale and designed for customer delight.",
  };
  headerTheme = "dark";
  workItems = [
    {
      backgroundImage: "./assets/images/work-image-1.jpg",
      title: "Restaurant Technology Reimagined",
      list: [
        "Food Service",
        "New Venture Parternships",
        "Marketplace Positioning",
        "Industry Disruption",
      ],
      button: { label: "view case study", link: "/work/restaurant-technology-reimagined" },
    },
    {
      backgroundImage: "./assets/images/work-image-2.jpg",
      title: "Higher Education Enrollment & Onboarding",
      list: [
        "Education",
        "Salesforce Integration",
        "Data Management",
        "Personalized Targeting",
      ],
      button: { label: "view case study", link: "/work/higher-education-enrollment" },
    },
    {
      backgroundImage: "./assets/images/work-image-3.jpg",
      title: "Gamified Sales Training Tool",
      list: ["B2B Training", "Gamification", "Streaming Video", "Custom CMS"],
      button: { label: "view case study", link: "/work/gamified-sales-training-tool" },
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(link: string) {
    if (link) {
      this.router.navigateByUrl(link);
    }
  }
}
