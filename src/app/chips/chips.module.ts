import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChipsComponent } from './chips.component';

@NgModule({
  declarations: [ChipsComponent],
  imports: [CommonModule],
  exports: [ChipsComponent],
})
export class ChipsModule {}
