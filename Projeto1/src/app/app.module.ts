import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SegurancaModuleModule } from './seguranca-module/seguranca-module.module';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { Util } from './shared-module/Utilitarios/Util';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import { PaginaNaoEncontradaModuleModule } from './pagina-nao-encontrada-module/pagina-nao-encontrada-module.module';
import { RoutingModule } from './app.routing';
import { MyHttpInterceptor } from './Interceptor';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    SegurancaModuleModule,
    SharedModuleModule, 
    PaginaNaoEncontradaModuleModule,
    RoutingModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass:MyHttpInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
