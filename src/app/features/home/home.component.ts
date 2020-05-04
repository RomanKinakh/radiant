import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  homeLogo = "../../../assets/images/Radiant-Logo-Red-200x128-10x.png";
  homeTitle = "We build software that solves problems.";
  menuItems = [
    {
      label: "work",
      link: "/",
    },
    {
      label: "services",
      link: "/",
    },
    {
      label: "about",
      link: "/",
    },
  ];

  deliveryMethodData = {
    title: "Our Delivery Method",
    steps: [
      {
        img: "../../../../assets/images/people.png",
        description: `Our blended local, 
          nearshore and offshore execution team guarentees quality and efficiency.`,
      },
      {
        img: "../../../../assets/images/process.png",
        description:
          "Radiant’s cycle of continuous delivery, integration and testing ensures performance and reliability.",
      },
      {
        img: "../../../../assets/images/technology.png",
        description:
          "We are experienced in web apps, mobile apps, internet of things, big data, devops and more.",
      },
    ],
  };

  technicalExperienceData = {
    title: "We have decades of technical experience across industries.",
    technologyImg: [
      "../../../../assets/images/petes.png",
      "../../../../assets/images/apple.png",
      "../../../../assets/images/pearson.png",
      "../../../../assets/images/oskarblues.png",
      "../../../../assets/images/microsoft.png",
      "../../../../assets/images/pearl-izumi.png",
    ],
  };

  workItems = [
    {
      backgroundImage: "../../../../assets/images/heard-home-image.jpg",
      subTitle: "heard labs",
      title: "Restaurant Technology Reimagined",
      btnLabel: "view case study",
    },
    {
      backgroundImage: "../../../../assets/images/pearson-home-image.jpg",
      subTitle: "pearson",
      title: "Higher Education Enrollment & Onboarding",
      btnLabel: "view case study",
    },
    {
      backgroundImage: "../../../../assets/images/casestudy-smthumb.jpg",
      subTitle: "brand buzz",
      title: "Gamified Sales Training Tool",
      btnLabel: "view case study",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
