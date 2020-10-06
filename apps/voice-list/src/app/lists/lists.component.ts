import { Component, OnInit } from '@angular/core';
import {  Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { List, State } from '../list.reducer';
import { selectLists } from '../list.selectors';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  lists: Observable<List[]>;

  constructor(private store: Store<State>) {
    this.lists = this.store.select(selectLists);
  }

  ngOnInit(): void {
   
  }

}
