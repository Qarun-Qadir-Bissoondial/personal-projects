import { Component } from '@angular/core';

@Component({
  selector: 'random-coin-toss',
  templateUrl: './coin-toss.component.html',
  styleUrls: ['./coin-toss.component.css']
})
export class CoinTossComponent {
  result: 'Heads' | 'Tails';
  flipCoin = () => { this.result = Math.floor(Math.random()) > 0.5 ? 'Heads' : 'Tails' }
}
