import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import { BoardUiModule } from './ui/board-ui.module';

@NgModule({
  imports: [CommonModule, BoardUiModule, BoardRoutingModule],
  declarations: [BoardComponent],
  exports: [BoardComponent],
})
export class BoardModule {}
