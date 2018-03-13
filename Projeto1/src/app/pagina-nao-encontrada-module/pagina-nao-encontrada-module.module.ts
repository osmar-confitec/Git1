;
import { NotFoundComponent } from './not-found/not-found.component';
import { 404PageComponent } from './404-page/404-page.component'import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 404Component } from './404/404.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [404Component, 404PageComponent, NotFoundComponent]
})
export class PaginaNaoEncontradaModuleModule { }
