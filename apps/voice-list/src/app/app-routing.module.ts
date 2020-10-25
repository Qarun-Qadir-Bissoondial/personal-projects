import { SingleListPage } from './pages/single-list/single-list.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsPage } from './pages/lists/lists.page';
import { AboutPage } from './pages/about/about.page';

export const routes: Routes = [
    { path: '', redirectTo: 'lists', pathMatch: 'full' },
    { path: 'lists', component: ListsPage },
    { path: 'about', component: AboutPage },
    { path: 'list-details/:name', component: SingleListPage },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule { }
