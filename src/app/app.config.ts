import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { counterReducer } from './store/items.reducer';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore({ counter: counterReducer }), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
