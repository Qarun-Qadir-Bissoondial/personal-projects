import { DoublesConfigComponent } from './../doubles-config/doubles-config.component';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'doubles-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent {

  order: FormGroup;
  singleDoubles: FormGroup;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.order = this.fb.group({
      name: this.fb.control('', Validators.required),
      doubles: this.fb.array([])
    });
  }

  // addDoubles() {
  //   (this.order.controls['doubles'] as FormArray).push(this.fb.group(this.singleDoubles.value));
  //   console.log(this.order);
  // }

  createOrder() {
    this.dialog.open(
      DoublesConfigComponent,
      {
        panelClass: 'create-order'
      }).afterClosed().subscribe(console.log, console.error);
  }

}
