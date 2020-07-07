import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  customers$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.customers$ = store.pipe(select('customers'));
  }
}
