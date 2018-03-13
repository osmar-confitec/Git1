import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { NotFoundComponent } from "./pagina-nao-encontrada-module/not-found/not-found.component";
import { TesterComponent } from "./tester/tester.component";

const APP_ROUTES : Routes = [
        {path:'teste'  , component:TesterComponent },
        {path:'**'  , component:NotFoundComponent }
]; 
@NgModule({
        imports:[RouterModule.forRoot(APP_ROUTES)],
        exports:[RouterModule]
    })
 export class RoutingModule{

    
}


//, canActivate:[AuthGuardService]