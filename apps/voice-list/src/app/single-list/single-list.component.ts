import { StorageService } from './../services/storage.service';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SpeechRecogService } from '../services/speech-recog.service';

@Component({
  selector: 'app-single-list',
  templateUrl: './single-list.component.html',
  styleUrls: ['./single-list.component.css']
})
export class SingleListComponent implements OnDestroy {
  list: List;
  completedPercentage: number;

  constructor(
    private router: Router,
    private storage: StorageService,
    private speech: SpeechRecogService) {
    
      const list = this.router.getCurrentNavigation().extras.state as List;
      
      this.list = !list
        ? this.storage.get<List>('current-list')
        : list;

      this.completedPercentage = (this.list.completed * 100) / (this.list.completed + this.list.pending);

      this.storage.save('current-list', this.list);
  }

  updateItem(selectedItem: Item, value: boolean) {
    selectedItem.completed = value;
    // update the model
  }

  ngOnDestroy(): void {
    this.storage.delete('current-list');
  }
  
  start() {
    this.speech.start();
  }

  stop() {
    this.speech.stop();
  }

  addItem(itemName: string): void {
    if (itemName in this.list.items) { return; }

    this.list.items[itemName] = false;
    this.list.pending++;
  }

  markAsCompleted(itemName: string): void {
    if (this.list.items[itemName] === true) { return; }

    this.list.items[itemName] = true;
    this.list.pending--;
    this.list.completed++;
  }

  removeItem(itemName: string): void {
    if (!(itemName in this.list.items)) { return; }

    const completed = this.list.items[itemName];

    completed
      ? this.list.completed--
      : this.list.pending--;

    delete this.list.items[itemName];
  }

  toggle(item) {
    console.log(item);
  }

  // undo() {} PHASE 2

}
