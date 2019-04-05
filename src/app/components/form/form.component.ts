import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  constructor() {}

  todo = {
    title: '',
    description: '',
  };
  logForm(form) {
    console.log(form.value);
  }
}
