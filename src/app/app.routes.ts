import { RouterModule, Routes } from '@angular/router';
import {PageManagerComponent} from './components/page-manager/page-manager.component';
import {MentionsComponent} from './components/mentions/mentions.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  { path: '', component: PageManagerComponent },
  { path: 'mentions-legales', component: MentionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollOffset: [0, 64] })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
