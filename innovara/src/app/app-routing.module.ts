import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { EquipeComponent } from './equipe/equipe.component';

const routes: Routes = [
  {path: "", redirectTo: 'pagina-inicial', pathMatch: 'full'},
  {path: "pagina-inicial", component: PaginaInicialComponent},
  {path: "sobre-nos", component: SobreNosComponent},
  {path: "contato", component: ContatoComponent},
  {path: "equipe", component: EquipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
