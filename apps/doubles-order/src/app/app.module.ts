import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { AboutComponent } from './../../../voice-list/src/app/about/about.component';
import { OrdersComponent } from './orders/orders.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { DoublesConfigComponent } from './doubles-config/doubles-config.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SeparateCamelCasePipe } from './separate-camel-case.pipe';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: 'create-order', component: CreateOrderComponent },
  { path: 'about', component: AboutComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    AboutComponent,
    CreateOrderComponent,
    DoublesConfigComponent,
    SeparateCamelCasePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
