import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent implements OnInit {
  headerData = {
    title: "SERVICES",
    description:
      "Our job is to add value to your organization through quality engineering.",
  };
  headerTheme = "dark";
  firstTitle = "SOFTWARE ENGINEERING";
  secondTitle = "SUPPORTING DISCIPLINES";
  firstDescription = `Our technology approach is designed for stability and reliability. Our applications are 
  fault-tolerant and have the professional quality that your organization deserves. When you're ready to internalize 
  your application code, you'll be proud of the work product we have produced for you.`;
  serviceTable = {
    header: {
      rowTitle: "technology",
      columnTitle: "core compentencies",
      types: [
        {
          title: "Mobile Apps",
          icon: "./assets/icons/mobile.svg",
          backgroundColor: "#0D1B51",
        },
        {
          title: "Web Apps",
          icon: "./assets/icons/desktop-solid.svg",
          backgroundColor: "rgba(13, 27, 81, 0.95)",
        },
        {
          title: "Internet of Things",
          icon: "./assets/icons/network-wired-solid.svg",
          backgroundColor: "rgba(13, 27, 81, 0.9)",
        },
        {
          title: "Big Data",
          icon: "./assets/icons/database-solid.svg",
          backgroundColor: "rgba(13, 27, 81, 0.85)",
        },
        {
          title: "Devops",
          icon: "./assets/icons/server-solid.svg",
          backgroundColor: "rgba(13, 27, 81, 0.8)",
        },
      ],
    },
    body: [
      {
        title: "IOS",
        technologies: [1, 0, 0, 0, 0],
      },
      {
        title: "Android",
        technologies: [1, 0, 0, 0, 0],
      },
      {
        title: "Angular / React",
        technologies: [0, 1, 0, 0, 0],
      },
      {
        title: "Java",
        technologies: [0, 1, 1, 0, 1],
      },
      {
        title: "Python",
        technologies: [0, 0, 0, 0, 1],
      },
      {
        title: "Mongo DB",
        technologies: [0, 0, 0, 1, 0],
      },
      {
        title: "Oracle / SQL Server",
        technologies: [0, 0, 0, 1, 0],
      },
      {
        title: "Go / Rust",
        technologies: [0, 0, 1, 0, 0],
      },
      {
        title: "Google Cloud Platform, AWS, Azure",
        technologies: [0, 1, 0, 0, 0],
      },
    ],
  };

  disciplines = [
    {
      image: "./assets/images/services-productleadership.png",
      title: "PRODUCT LEADERSHIP",
      description: `We are designed as a company to be your technology partner. Whether you simply need to complete
       a project or you are looking for a co-founder on your new venture - we have an engagement model to meet 
       your business needs.`,
      list: [
        "Technical Architecture",
        "New Venture Partnerships",
        "Marketplace Positioning",
        "Product Strategy & Development",
      ],
    },
    {
      image: "./assets/images/services-uxui.png",
      title: "UX / UI & CREATIVE",
      description: `Radiant’s design solutions emerge at the intersection of customer needs and business goals. 
      We believe in qualitative and quantitative research and are fundamentally user centric. We work hand in hand 
      with engineers to that our solutions are both visually compelling and technically optimal. `,
      list: [
        "UX/UI",
        "Branding & Visual Design",
        "Cross Platform Design",
        "Usability Testing & Research",
        "Information Architecture",
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
