import { SingleListComponent } from './single-list/single-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', redirectTo: 'lists', pathMatch: 'full' },
    { path: 'lists', component: ListsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'list-details/:name', component: SingleListComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule { }
