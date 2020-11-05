import { Component, OnDestroy, ViewChild, TemplateRef, Inject } from '@angular/core';
import { VoiceService } from '../../services/voice.service';
import { MatRipple } from '@angular/material/core';
import { ListWithItems, State } from '../../list.reducer';
import { select, Store } from '@ngrx/store';
import { createListItem, deleteList, deleteListItem, editListName, markItemComplete, markItemIncomplete } from '../../list.actions';
import { MatDialog } from '@angular/material/dialog';
import { filter, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { selectSingleList } from '../../list.selectors';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-single-list',
  templateUrl: './single-list.page.html',
  styleUrls: ['./single-list.page.css']
})
export class SingleListPage implements OnDestroy {
  @ViewChild(MatRipple) ripple: MatRipple;

  list$: Observable<ListWithItems>;
  listName: string;
  completedPercentage: number;
  listening: boolean;
  listeningTrigger;

  constructor(
    private voice: VoiceService,
    private store: Store<{appState: State}>,
    private dialog: MatDialog,
    private bottomSheetRef: MatBottomSheetRef<SingleListPage>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { listName: string }) {

      this.listName = this.data.listName;

      // @ts-ignore
      this.list$ = this.store.pipe(select(selectSingleList, { listName: this.listName }), tap(console.log));
      // this.calculatePercentage();
      // this.toggleListening(false);
  }

  toggleListening(checked: boolean) {
    this.listening = checked;

    if (checked) {
      this.listeningTrigger = setInterval(() => {
          const rippleRef = this.ripple.launch({
            centered: true,
          });
    
          rippleRef.fadeOut();
        }, 2000);

      this.startListening();
    } else {
      clearInterval(this.listeningTrigger);
      this.voice.teardown();
    }
  }

  openAddListDialog(addItemTemplate: TemplateRef<any>) {
    this.dialog.open(addItemTemplate)
      .afterClosed()
      .pipe(filter(response => !!response))
      .subscribe(itemName => {

        this.store.dispatch(createListItem({itemName, listName: this.listName}));

      });
  }

  toggleCompletion(status: boolean, itemName: string) {
    status
      ? this.markAsCompleted(itemName)
      : this.markAsIncomplete(itemName)
  }

  markAsCompleted(itemName: string) {
    this.store.dispatch(markItemComplete({listName: this.listName, itemName}))
  }

  markAsIncomplete(itemName: string) {
    this.store.dispatch(markItemIncomplete({listName: this.listName, itemName}));
  }

  deleteList(deleteTemplate: TemplateRef<any>, listName: string) {
    this.dialog.open(deleteTemplate)
      .afterClosed()
      .pipe(filter(response => !!response))
      .subscribe(() => {
        this.store.dispatch(deleteList({listName}));
      });
  }

  editList(editTemplate: TemplateRef<any>, oldListName: string) {
    this.dialog.open(editTemplate)
      .afterClosed()
      .pipe(filter(response => (!!response) && (response !== oldListName) ))
      .subscribe((listName: string) => {
        this.listName = listName;
        this.store.dispatch(editListName({oldListName, newListName: listName}));
        this.list$ = this.store.pipe(select(selectSingleList, { listName }));
      })
  }

  deleteItem(itemName: string) {
    console.log(itemName);
    this.store.dispatch(deleteListItem({listName: this.listName, itemName}))
  }

  closeList() {
    this.bottomSheetRef.dismiss();
  }

  startListening() {
    // const add = (item: string) => { this.addItem(item); };
    // const remove = (item: string) => {this.removeItem(item)};
    // const markComplete = (item: string) => { this.markAsComplete(item) };
    // const markIncomplete = (item: string) => { this.markAsIncomplete(item) };
    // const stop = () => { this.voice.teardown(); this.listening = false; }

    // const commands = [
    //   {
    //     'stop listening': stop
    //   },
    //   {
    //     'add :item': add,
    //     'we need :item': add
    //   },
    //   {
    //     'remove :item': remove,
    //     'delete :item': remove
    //   },
    //   {
    //     'check :item': markComplete,
    //     'we got :item': markComplete,
    //     'we have :item': markComplete
    //   },
    //   {
    //     'uncheck :item': markIncomplete
    //   },
    //   {
    //     'complete all': () => {
    //       for (const item in this.list.items) {
    //         this.markAsComplete(item);
    //       }
    //     }
    //   }
    // ];

    // @ts-ignore
    // this.voice.addCommands(commands).init();
  }

  // calculatePercentage() {
  //   this.completedPercentage = (this.list.completed * 100) / (this.list.completed + this.list.pending);
  // }

  // updateItem(itemName: string, value: boolean) {
  //   value
  //   ? this.markAsComplete(itemName)
  //   : this.markAsIncomplete(itemName);

  // }

  ngOnDestroy(): void {
    this.voice.teardown();
  }
  
  // addItem(itemName: string): void {
  //   if (itemName in this.list.items) { return; }

  //   this.list.items[itemName] = false;
  //   this.list.pending++;
  //   this.calculatePercentage();
  //   console.log(this.list.items);
  //   this.changeRef.detectChanges();
  // }

  // markAsComplete(itemName: string): void {
  //   if (!(itemName in this.list.items)) { return; }    
  //   if (this.list.items[itemName] === true) { return; }

  //   this.list.items[itemName] = true;
  //   this.list.pending--;
  //   this.list.completed++;
  //   this.calculatePercentage();
  //   this.changeRef.detectChanges();
  // }

  // markAsIncomplete(itemName: string): void {
  //   if (this.list.items[itemName] === false) { return; }
  //   this.list.items[itemName] = false;
  //   this.list.pending++;
  //   this.list.completed--;
  //   this.calculatePercentage();
  //   this.changeRef.detectChanges();
  // }

  // removeItem(itemName: string): void {
  //   if (!(itemName in this.list.items)) { return; }

  //   const completed = this.list.items[itemName];

  //   completed
  //     ? this.list.completed--
  //     : this.list.pending--;

  //   delete this.list.items[itemName];
  //   this.calculatePercentage();
  //   this.changeRef.detectChanges();
  // }

  // toggle(itemName: string) {
  //   if (!(itemName in this.list.items)) { return; }

  //   console.log(itemName);
  //   this.list.items[itemName]
  //     ? this.markAsIncomplete(itemName)
  //     : this.markAsComplete(itemName);
  // }

}
