import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'


const usuarioRoutes = [

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