import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FinderComponent } from './finder/finder.component';
import { PictoTranslatorComponent } from './picto-translator/picto-translator.component';
import { TranslatorComponent } from './translator/translator.component';
import { ServiceComponent } from './src/app/finder/service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    FinderComponent,
    PictoTranslatorComponent,
    TranslatorComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
