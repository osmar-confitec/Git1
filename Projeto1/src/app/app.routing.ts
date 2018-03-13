
const APP_ROUTES : Routes = [
        { path :'viewchild'  , component:ViewchildComponent },
        { path :'404Curse'  , component:CursoNaoEncontradoComponent
         },

        { path :'login'  , component:LoginComponent },
        { path :''  , component:HomeComponent , canActivate:[AuthGuardService] },
        { path :'endereco'  ,  component:EnderecosComponent , canActivate:[AuthGuardService] },
        { path : 'cursos' , component: CursosComponent , canActivate:[AuthGuardService] },
        { path : 'cursos/:id' , component: CursosDetalheComponent , canActivate:[AuthGuardService] },
        {path:'**'  , component:CursoNaoEncontradoComponent }
]; 
export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

//, canActivate:[AuthGuardService]