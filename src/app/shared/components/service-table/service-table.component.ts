import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-table',
  templateUrl: './service-table.component.html',
  styleUrls: ['./service-table.component.scss']
})
export class ServiceTableComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit(): void {
  }

}
