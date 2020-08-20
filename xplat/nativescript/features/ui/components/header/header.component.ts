import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

import { HeaderBaseComponent } from '@qarun-qb/features';

@Component({
  moduleId: module.id,
  selector: 'qarun-qb-header',
  templateUrl: 'header.component.html',
})
export class HeaderComponent extends HeaderBaseComponent {
  constructor(private router: RouterExtensions) {
    super();
  }
}
