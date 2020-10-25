import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {  select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { List, State } from '../../list.reducer';
import { selectLists } from '../../list.selectors';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.css']
})
export class ListsPage {

  lists: Observable<List[]>;

  constructor(
    private store: Store<{appState: State}>,
    private dialog: MatDialog) {
    this.lists = this.store.pipe(select(selectLists));
  }

  createList() {

  }

}
