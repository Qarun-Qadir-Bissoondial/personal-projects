import { StorageService } from './../services/storage.service';
import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
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
    private speech: SpeechRecogService,
    private changeRef: ChangeDetectorRef) {
    
      const list = this.router.getCurrentNavigation().extras.state as List;
      
      this.list = !list
        ? this.storage.get<List>('current-list')
        : list;

      this.calculatePercentage();

      this.storage.save('current-list', this.list);

      this.speech.recognizer.onresult = (event: SpeechRecognitionEvent) => {
        const speechResult = event.results[0][0].transcript.toLocaleLowerCase();
        
        if (!(speechResult in this.list.items)) {
          console.log(`${speechResult} not found in list`);
        } else {
          const completed = this.list.items[speechResult];

          completed 
            ? this.markAsIncomplete(speechResult)
            : this.markAsCompleted(speechResult);

          console.log('Finished');
          this.changeRef.detectChanges();
        }
      }
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
    this.calculatePercentage();
  }

  markAsCompleted(itemName: string): void {
    if (this.list.items[itemName] === true) { return; }

    this.list.items[itemName] = true;
    this.list.pending--;
    this.list.completed++;
    this.calculatePercentage();
  }

  markAsIncomplete(itemName: string): void {
    if (this.list.items[itemName] === false) { return; }
    this.list.items[itemName] = false;
    this.list.pending++;
    this.list.completed--;
    this.calculatePercentage();
  }

  removeItem(itemName: string): void {
    if (!(itemName in this.list.items)) { return; }

    const completed = this.list.items[itemName];

    completed
      ? this.list.completed--
      : this.list.pending--;

    delete this.list.items[itemName];
    this.calculatePercentage();
  }

  toggle(item) {
    console.log(item);
  }

  trackFn(index, item) {
    return index;
  }

  // undo() {} PHASE 2

}
