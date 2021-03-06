import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { reducers, effects } from './store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCustomerComponent } from './components/form-customer/form-customer.component';
import { ListCustomersComponent } from './components/list-customers/list-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCustomerComponent,
    ListCustomersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot(effects),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
