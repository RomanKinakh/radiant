import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  headerData = {
    title: "CONTACT US",
  };
  headerTheme = "dark";
  articles = [
    {
      title: "PARTNERS",
      description:
        "We look forward to supporting you on your next technical challenge.",
    },
    {
      title: "TALENT",
      description: `Our bench is a good one. We are always looking to connect with engineers, 
      designers, sales staff and product pros.`,
    },
  ];
  addressTitle = "YOU CAN FIND US";
  addressText = "1550 Wewatta St., Suite 200 Denver, CO 80202";
  contactInfo = [
    {
      title: "Phone",
      description: "702-663-1777",
    },
    {
      title: "Email",
      description: "hello@radiantinteractive.com",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
