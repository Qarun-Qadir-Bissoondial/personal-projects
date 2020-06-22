import { Component } from '@angular/core';

@Component({
  selector: 'random-coin-toss',
  template: `
    <section>
      <h3>You flipped: {{result}}</h3>
      <button mat-flat-button color = 'primary' (click) = 'flip()'>Flip</button>
    </section>
  `,
  styles: [
    `section {
      padding: 8px 0 16px 0;
      display: flex;
      justify-content: space-between;
      align-items: center
    }`,
    `h3 {
      margin-bottom: 0
    }`
  ]
})
export class CoinTossComponent {
  result: string;

  constructor() {
    this.flip();
  }

  flip() {
    this.result = '...';
    setTimeout(() => {
      this.result = Math.random() > 0.5 ? 'Heads!' : 'Tails!';
    }, 500);
  }
}
