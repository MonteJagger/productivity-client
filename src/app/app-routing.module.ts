import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsComponent } from './components/lists/lists.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full'},
  { path: 'lists', component: ListsComponent },
  { path: 'itemDetail', component: ItemDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
