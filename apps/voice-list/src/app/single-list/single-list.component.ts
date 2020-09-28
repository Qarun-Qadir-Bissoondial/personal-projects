import { StorageService } from './../services/storage.service';
import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { VoiceService } from '../services/voice.service';

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
    private voice: VoiceService,
    private changeRef: ChangeDetectorRef) {

      const list = this.router.getCurrentNavigation().extras.state as List;
      
      this.list = !list
        ? this.storage.get<List>('current-list')
        : list;

      this.calculatePercentage();
      this.storage.save('current-list', this.list);

      const commands = [
        {
          '*item': (item: string) => { 
            console.log(item);
            // this.toggle(item); 
          }
        },
        {
          'add :item': (item: string) => { this.addItem(item); },
          'we need :item': (item: string) => { this.addItem(item); }
        },
        {
          'remove :item': (item: string) => {this.removeItem(item)},
          'delete :item': (item: string) => {this.removeItem(item)}
        },
        {
          'check :item': (item: string) => { this.markAsCompleted(item) },
          'tick off :item': (item: string) => { this.markAsCompleted(item) },
        },
      ];

      // @ts-ignore
      this.voice.addCommands(commands).init();
  }

  calculatePercentage() {
    this.completedPercentage = (this.list.completed * 100) / (this.list.completed + this.list.pending);
  }

  updateItem(itemName: string, value: boolean) {
    value
    ? this.markAsCompleted(itemName)
    : this.markAsIncomplete(itemName);

  }

  ngOnDestroy(): void {
    this.voice.teardown();
  }
  
  addItem(itemName: string): void {
    if (itemName in this.list.items) { return; }

    this.list.items[itemName] = false;
    this.list.pending++;
    this.calculatePercentage();
    console.log(this.list.items);
    this.changeRef.detectChanges();
  }

  markAsCompleted(itemName: string): void {
    if (!(itemName in this.list.items)) { return; }    
    if (this.list.items[itemName] === true) { return; }

    this.list.items[itemName] = true;
    this.list.pending--;
    this.list.completed++;
    this.calculatePercentage();
    this.changeRef.detectChanges();
  }

  markAsIncomplete(itemName: string): void {
    if (this.list.items[itemName] === false) { return; }
    this.list.items[itemName] = false;
    this.list.pending++;
    this.list.completed--;
    this.calculatePercentage();
    this.changeRef.detectChanges();
  }

  removeItem(itemName: string): void {
    if (!(itemName in this.list.items)) { return; }

    const completed = this.list.items[itemName];

    completed
      ? this.list.completed--
      : this.list.pending--;

    delete this.list.items[itemName];
    this.calculatePercentage();
    this.changeRef.detectChanges();
  }

  toggle(itemName: string) {
    if (!(itemName in this.list.items)) { return; }

    this.list.items[itemName]
      ? this.markAsIncomplete(itemName)
      : this.markAsCompleted(itemName);
  }

}
