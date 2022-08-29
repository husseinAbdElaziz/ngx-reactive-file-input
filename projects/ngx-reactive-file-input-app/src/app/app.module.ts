import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxReactiveFileInputModule } from 'projects/ngx-reactive-file-input/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxReactiveFileInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
