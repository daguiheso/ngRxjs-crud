import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private store: Store<AppState>) {
    store.pipe(select('customers')).subscribe(res => {
      console.log(res);
    });
  }
}
