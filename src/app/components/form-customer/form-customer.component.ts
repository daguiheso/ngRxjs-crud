import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.scss'],
})
export class FormCustomerComponent implements OnInit {
  formCustomer: FormGroup;
  isEdit: boolean;

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formCustomer = this.builder.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      id: [null],
    });
  }

  addCustomer() {

  }

  updateCustomer() {

  }
}
