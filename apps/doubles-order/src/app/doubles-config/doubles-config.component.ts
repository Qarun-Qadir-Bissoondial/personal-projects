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
        amount: this.fb.control('', Validators.required),
        channa: this.fb.control(true), // default to true
        triples: this.fb.control(''),
        sweetSauce: this.fb.control(''),
        coconut: this.fb.control(''),
        pepper: this.fb.control('', Validators.required),
        cucumber: this.fb.control(''),
        kutchela: this.fb.control(''),
        roastPepper: this.fb.control(''),
        bandania: this.fb.control('')
      });

      if (this.data) {
        this.singleDoubles.setValue(data);
      }
  }


}
