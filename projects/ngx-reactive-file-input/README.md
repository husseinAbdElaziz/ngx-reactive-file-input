## Overview

NGX Reactive File Input is a simple and Lightweight component which helps to use input file with forms (reactive or template driven)
with native file input attributes support (id, class, accept, etc...)

## DEMO

check the [DEMO](https://stackblitz.com/edit/angular-ivy-grfxmc?file=src/app/app.component.html)

## Installation

```bash
npm i --save ngx-reactive-file-input
```

## Usage

### Importing The 'ngx-reactive-file-input' Module

```TypeScript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgxReactiveFileInputModule } from 'ngx-reactive-file-input';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxReactiveFileInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

### In Component HTML

```html

<ngx-reactive-file-input formControlName="file" (fileChanged)="files = $event"></ngx-reactive-file-input>
```

You can use any input file type attributes such as accept, id, class, etc...

example

```html

<form>
    <ngx-reactive-file-input accept="images/*" class="input__file" id="attachment"></ngx-reactive-file-input>
</form>
```

## Parameters

Name  | Description | Example |
------------- | ------------- | -------------
(fileChanged)  | get input files change  | (fileChanged)="handleFiles($event)"

## License

[MIT](/LICENSE)

## Change Log

[CHANGELOG](/CHANGELOG.md)
