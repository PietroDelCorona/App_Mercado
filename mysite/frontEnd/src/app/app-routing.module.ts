import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ListaInteligenteComponent } from './lista-inteligente/lista-inteligente.component';
import { ListaPorProdutoComponent } from './lista-por-produto/lista-por-produto.component';
import { EstabelecimentosCadastradosComponent } from './estabelecimentos-cadastrados/estabelecimentos-cadastrados.component';
import { PaginaUsuarioComponent } from './pagina-usuario/pagina-usuario.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'listaInteligente', component: ListaInteligenteComponent },
  { path: 'listaPorProduto', component: ListaPorProdutoComponent },
  { path: 'estabelecimentosCadastrados', component: EstabelecimentosCadastradosComponent },
  { path: 'paginaUsuario', component: PaginaUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
