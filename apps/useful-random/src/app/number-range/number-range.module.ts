import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberRangeComponent } from './number-range/number-range.component';

const routes: Routes = [
  { path: '', component: NumberRangeComponent }
]

@NgModule({
  declarations: [NumberRangeComponent],
  imports: [
    CommonModule
  ]
})
export class NumberRangeModule { }
