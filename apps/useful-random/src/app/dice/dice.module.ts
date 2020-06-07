import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiceComponent } from './dice/dice.component';

const routes: Routes = [
  { path: '', component: DiceComponent }
];

@NgModule({
  declarations: [DiceComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class DiceModule { }
