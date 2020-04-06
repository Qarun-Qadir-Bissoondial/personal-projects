import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  lists: List[] = [
    {
      name: 'List 1',
      itemsCompleted: [],
      itemsPending: [
        {
          name: 'Fish',
          completed: false
        },
        {
          name: 'Eggs',
          completed: false
        },
        {
          name: 'Milk',
          completed: false
        }
      ]
    },
    {
      name: 'List 2',
      itemsCompleted: [],
      itemsPending: [
        {
          name: 'Chicken',
          completed: false
        },
        {
          name: 'Water',
          completed: false
        },
        {
          name: 'Celery',
          completed: false
        }
      ]
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
