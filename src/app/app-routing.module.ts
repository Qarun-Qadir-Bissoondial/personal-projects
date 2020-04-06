import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: 'lists', component: ListsComponent },
    { path: 'about', component: AboutComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule { }
