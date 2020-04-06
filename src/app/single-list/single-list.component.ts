import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-list',
  templateUrl: './single-list.component.html',
  styleUrls: ['./single-list.component.css']
})
export class SingleListComponent implements OnInit {
  @Input() list: List;

  constructor() { }

  ngOnInit(): void {
  }

}
