import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RpcComponent } from './rpc/rpc.component';

const routes: Routes = [
  { path: '', component: RpcComponent }
]

@NgModule({
  declarations: [RpcComponent],
  imports: [
    CommonModule
  ]
})
export class RockPaperScissorsModule { }
