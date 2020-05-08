import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  formTitle = 'Let’s Chat.';
  checkboxLabel = 'Send me Radiant Interactive’s Global Delivery Playbook.';
  contactForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    subject: new FormControl(),
    message: new FormControl(),
    sendPlaybook: new FormControl(false),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    console.log(this.contactForm.getRawValue());
  }

}
