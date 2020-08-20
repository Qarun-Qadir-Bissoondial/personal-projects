import { Component } from '@angular/core';

@Component({
  selector: 'random-wrapper',
  template: `
  <div class="card mat-elevation-z2">
    <header (click) = 'shown = !shown' class = 'title-and-desc'>
        <ng-content select = 'h3'></ng-content>
        <ng-content select = [description]></ng-content>
    </header>

    <section *ngIf = 'shown'>
      <main>
          <ng-content select = '[main-body]'></ng-content>
      </main>

      <footer style = 'text-align: center;'>
          <button mat-raised-button color = 'primary' (click) = 'shown = false'>Close</button>
      </footer>
    </section>
  </div>
  `,
  styles: [],
})
export class WrapperComponent {
  shown: boolean = false;
}
