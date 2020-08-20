import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'doubles-doubles-config',
  templateUrl: './doubles-config.component.html',
  styleUrls: ['./doubles-config.component.scss']
})
export class DoublesConfigComponent {
  singleDoubles: FormGroup

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: object,
    private ref: MatDialogRef<DoublesConfigComponent>,
    private fb: FormBuilder) {
      this.singleDoubles = this.fb.group({
        amount: this.fb.control('', [Validators.required, Validators.min(1)]),
        triples: this.fb.control(false, [Validators.required]),
        toppings: this.fb.group({
          channa: this.fb.control(true), // default to true
          sweetSauce: this.fb.control(''),
          coconut: this.fb.control(''),
          cucumber: this.fb.control(''),
          kutchela: this.fb.control(''),
          roastPepper: this.fb.control(''),
          bandania: this.fb.control('')
        }),
        pepper: this.fb.control('', Validators.required),
        
      });

      if (this.data) {
        this.singleDoubles.setValue(data);
      }
  }


}
