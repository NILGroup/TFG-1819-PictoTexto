import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModalComponent } from './utils/modals/modal-component'
import { AppComponent } from './app.component';
import { FinderComponent } from './finder/finder.component';
import { PictoTranslatorComponent } from './picto-translator/picto-translator.component';
import { TranslatorComponent } from './translator/translator.component';
import {MaterialModule} from './utils/material-module';
import { CookieModule } from 'ngx-cookie';

import '../polyfills';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FinderComponent,
    PictoTranslatorComponent,
    TranslatorComponent,
    ModalComponent,
    HeaderComponent,
    FooterComponent
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
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalComponent
  ]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
