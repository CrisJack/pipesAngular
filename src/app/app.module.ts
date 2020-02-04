import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PalabraPipe } from './pipes/palabra.pipe';
import { CambiarTipoPipe } from './pipes/cambiarTipo.pipe';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    PalabraPipe,
    CambiarTipoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
