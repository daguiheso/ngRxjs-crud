import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.scss'],
})
export class FormCustomerComponent implements OnInit, OnChanges {
  formCustomer: FormGroup;
  @Input() isEdit: boolean;
  @Input() customer: Customer;
  @Output() updated: EventEmitter<Customer> = new EventEmitter();

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.customer && changes.customer.currentValue) {
      this.initForm();
    }
  }

  initForm() {
    this.formCustomer = this.builder.group({
      name: [this.customer.name, [Validators.required]],
      age: [this.customer.age, [Validators.required]],
      email: [this.customer.email, [Validators.required, Validators.email]],
      id: [this.customer.id],
    });
  }

  addCustomer() {

  }

  updateCustomer() {
    this.updated.emit(this.formCustomer.value);
  }
}
