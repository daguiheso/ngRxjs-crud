import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss'],
})

export class ListCustomersComponent implements OnInit {
  @Input() data: any;
  @Output() editRow: EventEmitter<Customer> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  editCustomer(customer: Customer) {
    this.editRow.emit(customer);
  }
}
