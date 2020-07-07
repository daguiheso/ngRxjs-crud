import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './store';
import { Observable } from 'rxjs';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  customers$: Observable<any>;

  constructor(
    private store: Store<AppState>,
    private customerService: CustomerService
  ) {
    this.customers$ = store.pipe(select('customers'));
  }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(res => console.log(res));
  }
}
