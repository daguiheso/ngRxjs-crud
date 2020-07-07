import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from './store';
import { loadCustomers, updatedCustomer } from './store/actions/customer.actions';
import { CustomerState } from './store/reducers/app.reducer';
import { getState, getCustomersState, getCustomerById } from './store/reducers/index';
import { Customer } from './models/customer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  customers$: Observable<CustomerState>;
  isEdit: boolean = false;
  person: Customer = {
    name: '',
    age: null,
    email: '',
    id: null,
  };

  constructor(private store: Store<AppState>) {
    this.customers$ = store.pipe(select('customers'));

    // use selector
    // store.pipe(select(getCustomerById(7))).subscribe((res) => {
    //   console.log(res);
    // });
  }

  ngOnInit() {
    this.store.dispatch(loadCustomers());
  }

  editCustomer(customer: Customer) {
    this.isEdit = true;
    this.person = { ...customer };
  }

  updateCustomer(customer: Customer) {
    this.store.dispatch(updatedCustomer(customer));
  }
}
