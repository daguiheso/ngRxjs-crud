import { CustomerState, customerReducer } from './app.reducer';

export interface AppState {
  customers: CustomerState;
}

export const reducers = {
  customers: customerReducer,
};
