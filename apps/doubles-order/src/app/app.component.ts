import { Component } from '@angular/core';

@Component({
  selector: 'doubles-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'doubles-order';

  links: AppLink[] = [
    { title: 'Orders', route: '/', icon: 'format_list_numbered' },
    { title: 'Create', route: '/create-order', icon: 'add' },
    { title: 'About', route: '/about', icon: 'help_outline' }
  ];
  activeLink = this.links[0].route;
}
