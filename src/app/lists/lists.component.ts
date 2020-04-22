import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  lists: List[] = [
    // {
    //   name: 'Grocery List',
    //   completed: 0,
    //   pending: 3,
    //   items: [
    //     {
    //       name: 'Fish',
    //       completed: true
    //     },
    //     {
    //       name: 'Eggs',
    //       completed: false
    //     },
    //     {
    //       name: 'Milk',
    //       completed: false
    //     }
    //   ]
    // },
    // {
    //   name: 'Fruits to buy',
    //   completed: 0,
    //   pending: 3,
    //   items: [
    //     {
    //       name: 'Apples',
    //       completed: false
    //     },
    //     {
    //       name: 'Ornages',
    //       completed: false
    //     },
    //     {
    //       name: 'Bananas',
    //       completed: false
    //     }
    //   ]
    // },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
