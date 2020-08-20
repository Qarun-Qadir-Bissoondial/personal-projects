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

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.order = this.fb.group({
      name: this.fb.control('', Validators.required),
      doubles: this.fb.array([])
    });
  }

  addDoubles(config: DoublesConfig) {
    console.log(config);
    (this.order.controls['doubles'] as FormArray).push(this.fb.group(config));
  }

  createOrder() {
    this.dialog.open(
      DoublesConfigComponent,
      {
        panelClass: 'create-order'
      }).afterClosed().subscribe((data: DoublesConfig) => {
        if (data) {
          this.addDoubles(data);
        }
      }, console.error);
  }

}
