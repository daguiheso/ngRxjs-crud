import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from './store';
import { loadCustomers } from './store/actions/customer.actions';
import { CustomerState } from './store/reducers/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  customers$: Observable<CustomerState>;

  constructor(private store: Store<AppState>) {
    this.customers$ = store.pipe(select('customers'));
  }

  ngOnInit() {
    this.store.dispatch(loadCustomers());
  }
}
