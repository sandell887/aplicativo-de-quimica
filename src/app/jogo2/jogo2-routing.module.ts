import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Jogo2Page } from './jogo2.page';

const routes: Routes = [
  {
    path: '',
    component: Jogo2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Jogo2PageRoutingModule {}
