import { StorageService } from './../services/storage.service';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-list',
  templateUrl: './single-list.component.html',
  styleUrls: ['./single-list.component.css']
})
export class SingleListComponent implements OnDestroy {
  list: List;

  constructor(
    private router: Router,
    private storage: StorageService) {
    
      const list = this.router.getCurrentNavigation().extras.state as List;
      
      this.list = !list
        ? this.storage.get<List>('current-list')
        : list;

      this.storage.save('current-list', this.list);
  }

  updateItem(selectedItem: Item, value: boolean) {
    selectedItem.completed = value;
    // update the model
  }

  ngOnDestroy(): void {
    this.storage.delete('current-list');
  }

}
