import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';


const usuarioRoutes = [
        {path:'usuario',component:UsuarioListaComponent}
        /* {path:'aluno' , component:AlunoComponent,
         canActivate:[AlunoGuardService],
         canDeactivate:[AlunoGuardDeactiveService],
         canActivateChild:[AlunoGuardChildService],
        children:[
        {path:'novo' , component:AlunoFormComponent},
        {path:':id' , component:AlunoDetalheComponent,
            resolve:{aluno:AlunoGuardResolvedService}
            
        },
        {path:':id/editar' , component:AlunoFormComponent} 
    ]}*/
   
];
@NgModule({
    imports:[RouterModule.forChild(usuarioRoutes)],
    exports:[RouterModule]
})
export class UsuarioRoutingModule{

    
}