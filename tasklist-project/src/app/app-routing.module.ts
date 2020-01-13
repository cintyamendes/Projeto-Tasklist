import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisarComponent } from './Task/pesquisar/pesquisar.component';
import { EditarComponent } from './Task/editar/editar.component';
import { AdicionarComponent } from './Task/adicionar/adicionar.component';


// Mapeamento das rotas
const routes: Routes = [
  {path: 'adicionar', component: AdicionarComponent},
  {path: 'pesquisar', component: PesquisarComponent},
  {path: 'editar', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
