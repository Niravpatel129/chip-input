import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChipsModule } from './chips/chips.module';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChipsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
