import { filter } from 'rxjs/operators';
import { Router, NavigationStart } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'doubles-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'doubles-order';
  links: AppLink[] = [
    { title: 'Orders', route: '/', icon: 'format_list_numbered' },
    { title: 'Create', route: '/create-order', icon: 'add' },
    { title: 'About', route: '/about', icon: 'help_outline' } 
  ];
  active: string;
  routerSubscription: Subscription;

  constructor(private router: Router) {
    this.routerSubscription = this.router.events
      .pipe(filter(e => e instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        this.active = event.url;
        console.log(this.active);
      });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
      this.routerSubscription = undefined;
    }
  }

}
