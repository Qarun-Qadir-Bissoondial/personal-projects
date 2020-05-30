import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'doubles-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  orderForm: FormArray;

  constructor(private fb: FormBuilder) {
      this.orderForm = this.fb.array([]);
  }

  ngOnInit(): void {
  }

}
