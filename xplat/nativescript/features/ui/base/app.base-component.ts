import { Directive } from '@angular/core';

// libs
import { BaseComponent } from '@qarun-qb/core';
import { AppService } from '@qarun-qb/nativescript/core';

@Directive()
export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
