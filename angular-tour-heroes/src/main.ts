import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/heroes';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
