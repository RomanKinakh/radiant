import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-technical-experience',
  templateUrl: './technical-experience.component.html',
  styleUrls: ['./technical-experience.component.scss']
})
export class TechnicalExperienceComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
