import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dice', loadChildren: () => import('./dice/dice.module').then(m => m.DiceModule) },
  { path: 'coin-toss', loadChildren: () => import('./coin-toss/coin-toss.module').then(m => m.CoinTossModule) },
  { path: 'number-range', loadChildren: () => import('./number-range/number-range.module').then(m => m.NumberRangeModule) },
  { path: 'rock-paper-scissors', loadChildren: () => import('./rock-paper-scissors/rock-paper-scissors.module').then(m => m.RockPaperScissorsModule) },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
