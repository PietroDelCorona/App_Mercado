import { Component } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { IUsuario } from './IUsuario';

@Component({
  selector: 'app-pagina-usuario',
  templateUrl: './pagina-usuario.component.html',
  styleUrl: './pagina-usuario.component.css'
})
export class PaginaUsuarioComponent {
  nomeUsuario: string | undefined;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.obterUsuario();
  }

  obterUsuario() {
    this.usuarioService.obterNomeUsuario().subscribe(
      (nome: string) => {
        this.nomeUsuario = nome;
        return this.nomeUsuario
      },
      error => {
        console.error('Erro ao obter dados do usuário', error);
      }
    );
  }
}
