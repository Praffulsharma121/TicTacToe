import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxComponent } from './box/box.component';
import { SingleplayerComponent } from './singleplayer/singleplayer.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'multi', component: BoxComponent},
  {path: 'single', component: SingleplayerComponent},
  {path: 'home', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
