import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SegurancaModuleModule } from './seguranca-module/seguranca-module.module';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { Util } from './shared-module/Utilitarios/Util';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SegurancaModuleModule,
    SharedModuleModule
  ],
  providers: [Util],
  bootstrap: [AppComponent]
})
export class AppModule { }
