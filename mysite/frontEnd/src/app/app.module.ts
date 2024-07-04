import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListaInteligenteComponent } from './lista-inteligente/lista-inteligente.component';
import { FormsModule } from '@angular/forms';
import { ListaPorProdutoComponent } from './lista-por-produto/lista-por-produto.component';
import { EstabelecimentosCadastradosComponent } from './estabelecimentos-cadastrados/estabelecimentos-cadastrados.component';
import { PaginaUsuarioComponent } from './pagina-usuario/pagina-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BottomBarComponent,
    HomePageComponent,
    ListaInteligenteComponent,
    ListaPorProdutoComponent,
    EstabelecimentosCadastradosComponent,
    PaginaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    FormsModule 
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
