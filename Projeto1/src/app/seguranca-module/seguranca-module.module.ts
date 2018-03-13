import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioRoutingModule } from './usuario-routing-module';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { UsuarioNovoComponent } from './usuario-novo/usuario-novo.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from '../Interceptor';

@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ],
  declarations: [UsuarioListaComponent, UsuarioDetalheComponent, UsuarioNovoComponent],
  providers:[{provide: HTTP_INTERCEPTORS,useClass:Interceptor, multi:true}]
})
export class SegurancaModuleModule { }
