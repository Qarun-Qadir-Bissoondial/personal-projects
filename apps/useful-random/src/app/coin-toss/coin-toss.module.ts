import { MatButtonModule } from '@angular/material/button';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinTossComponent } from './coin-toss/coin-toss.component';

const routes: Routes = [
  { path: '', component: CoinTossComponent }
]

@NgModule({
  declarations: [CoinTossComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule
  ]
})
export class CoinTossModule { }
