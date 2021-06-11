import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Jogo2PageRoutingModule } from './jogo2-routing.module';

import { Jogo2Page } from './jogo2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Jogo2PageRoutingModule
  ],
  declarations: [Jogo2Page]
})
export class Jogo2PageModule {}
