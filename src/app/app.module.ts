import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { LeftMenuItemComponent } from './left-menu-item/left-menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    LeftMenuItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
