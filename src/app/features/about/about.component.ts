import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  headerData = {
    title: "ABOUT",
    description: null,
  };
  headerTheme = "light";
  headerTitle = "We commit code from Boulder, Colorado and around the globe.";
  firstParagraphTitle = "OUR TEAM";
  secondParagraphTitle = "PROCESS";
  thirdParagraphTitle = "PARTNERSHIPS";
  firstParagraph = `The Radiant team has decades of technical and creative leadership. Radiant was founded in 
  2009 and has evolved and triumphed throughout the seasons. Today, Radiant’s co-shore delivery model includes 
  a blended local, offshore and nearshore team. This strategic design allows us to deliver efficient and cost 
  effective solutions. Company, software and design leadership are headquartered in Boulder, CO; while work 
  is executed around the globe.`;
  secondParagraph = `Radiant’s global delivery process is proven to yield performent products. The initial project 
  steps include measuring twice. The work we execute is continuously delivered, integrated and tested to ensure 
  stability and reliability. Once the project is complete and accepted, we work with you to hand off code or 
  support a maintenance plan.`;
  thirdParagraph = `The quality of our craft starts with a commitment to our business relationships. From those 
  relationships, we build world class software products and digital marketing campaigns together. Whether you 
  simply need a project completed, or if you need a technology co-founder for your venture, we have an engagement 
  model to meet your business and technology needs.`;
  contactTitle = "Send us a note and we’ll send you a copy of our Global Delivery Playbook.";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(url: string) {
    if (url) {
      this.router.navigateByUrl(url);
    }
}

}
