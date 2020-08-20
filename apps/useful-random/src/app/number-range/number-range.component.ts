import { Component } from '@angular/core';

@Component({
  selector: 'random-number-range',
  templateUrl: './number-range.component.html',
  styleUrls: ['./number-range.component.css']
})
export class NumberRangeComponent {
  limit1: number = 0;
  limit2: number = 100;
  min_allowed: number = Number.MIN_SAFE_INTEGER;
  max_allowed: number = Number.MAX_SAFE_INTEGER;
  generated: number;

  generateNumber() {
    let min, max;

    if (this.limit1 === this.limit2) {
      this.generated = this.limit1;
      return;
    }

    if (this.limit1 < this.limit2) {
      min = this.limit1;
      max = this.limit2;
    } else {
      min = this.limit2;
      max = this.limit1;
    }

    this.generated = Math.round(min + ((max - min) * Math.random()));
  }

}
