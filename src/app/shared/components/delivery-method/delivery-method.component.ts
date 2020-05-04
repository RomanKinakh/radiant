import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-delivery-method',
  templateUrl: './delivery-method.component.html',
  styleUrls: ['./delivery-method.component.scss']
})
export class DeliveryMethodComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
