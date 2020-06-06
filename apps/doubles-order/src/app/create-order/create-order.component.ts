import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'doubles-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent {

  order: FormGroup;
  singleDoubles: FormGroup;

  constructor(private fb: FormBuilder) {
    this.order = this.fb.group({
      name: this.fb.control('', Validators.required),
      amount: this.fb.control('', Validators.required),
      doubles: this.fb.array([])
    });

    this.singleDoubles = this.fb.group({
      channa: this.fb.control(true, [Validators.required]), // default to true
      triples: this.fb.control('', [Validators.required]),
      sweetSauce: this.fb.control('', [Validators.required]),
      coconut: this.fb.control('', [Validators.required]),
      pepper: this.fb.control('', Validators.required),
      cucumber: this.fb.control('', [Validators.required]),
      kutchela: this.fb.control('', [Validators.required]),
      roastPepper: this.fb.control('', [Validators.required]),
      bandania: this.fb.control('', [Validators.required])
    });

  }

  addDoubles() {
    (this.order.controls['doubles'] as FormArray).push(this.fb.group(this.singleDoubles.value));
    console.log(this.order);
  }

}
