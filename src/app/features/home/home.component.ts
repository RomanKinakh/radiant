import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainMenuService } from '../../shared/services/main-menu.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  homeLogo = "./assets/images/logo-light.png";
  homeTitle = "We build software that solves problems.";
  menuItems = [
    {
      label: "work",
      link: "/work",
    },
    {
      label: "services",
      link: "/services",
    },
    {
      label: "about",
      link: "/about",
    },
  ];

  deliveryMethodData = {
    title: "Our Delivery Method",
    steps: [
      {
        img: "./assets/images/people.png",
        description: `Our blended local, 
          nearshore and offshore execution team guarentees quality and efficiency.`,
      },
      {
        img: "./assets/images/process.png",
        description:
          "Radiant’s cycle of continuous delivery, integration and testing ensures performance and reliability.",
      },
      {
        img: "./assets/images/technology.png",
        description:
          "We are experienced in web apps, mobile apps, internet of things, big data, devops and more.",
      },
    ],
  };

  technicalExperienceData = {
    title: "We have decades of technical experience across industries.",
    technologyImg: [
      "./assets/images/petes.png",
      "./assets/images/apple.png",
      "./assets/images/pearson.png",
      "./assets/images/oskarblues.png",
      "./assets/images/microsoft.png",
      "./assets/images/pearl-izumi.png",
    ],
  };

  workItems = [
    {
      backgroundImage: "./assets/images/heard-home-image.jpg",
      subTitle: "heard labs",
      title: "Restaurant Technology Reimagined",
      button: { label: "view case study", link: "/work/restaurant-technology-reimagined" },
    },
    {
      backgroundImage: "./assets/images/pearson-home-image.jpg",
      subTitle: "pearson",
      title: "Higher Education Enrollment & Onboarding",
      button: { label: "view case study", link: "/work/higher-education-enrollment" },
    },
    {
      backgroundImage: "./assets/images/casestudy-smthumb.jpg",
      subTitle: "brand buzz",
      title: "Gamified Sales Training Tool",
      button: { label: "view case study", link: "/work/gamified-sales-training-tool" },
    },
  ];

  constructor(private router: Router, private menuService: MainMenuService) {}

  ngOnInit() {
  }

  navigate(link: string) {
    if (link) {
      this.router.navigateByUrl(link);
    }
  }

  openMenu() {
    this.menuService.setShowMenuValue(true);
  }
}
