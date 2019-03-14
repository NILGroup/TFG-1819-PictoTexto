import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FinderComponent } from './finder/finder.component';
import { PictoTranslatorComponent } from './picto-translator/picto-translator.component';
import { TranslatorComponent } from './translator/translator.component';
import {MaterialModule} from './utils/material-module';
import { CookieModule } from 'ngx-cookie';

import '../polyfills';

@NgModule({
  declarations: [
    AppComponent,
    FinderComponent,
    PictoTranslatorComponent,
    TranslatorComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MaterialModule,
    CookieModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
