import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {  select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { List, State } from '../list.reducer';
import { selectLists } from '../list.selectors';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {

  lists: Observable<List[]>;

  constructor(
    private store: Store<{appState: State}>,
    private dialog: MatDialog) {
    this.lists = this.store.pipe(select(selectLists));
  }

  createList() {
    
  }

}
