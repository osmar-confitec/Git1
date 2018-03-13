import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SegurancaModuleModule } from './seguranca-module/seguranca-module.module';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { Util } from './shared-module/Utilitarios/Util';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { Interceptor } from './Interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SegurancaModuleModule,
    SharedModuleModule
  ],
  providers: [Util,{provide: HTTP_INTERCEPTORS,useClass:Interceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
