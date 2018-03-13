import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SegurancaModuleModule } from './seguranca-module/seguranca-module.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SegurancaModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
