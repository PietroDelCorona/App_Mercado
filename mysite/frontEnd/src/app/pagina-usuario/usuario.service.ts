import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsuario } from './IUsuario';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  baseurl = "http://127.0.0.1:8000";

  constructor(private httpclient: HttpClient) { }

  obterNomeUsuario(): Observable<string> {
    return this.httpclient.get<IUsuario>(this.baseurl + '/api/usuarios/6/').pipe(
      map(usuario => usuario.nome)
    );
  }
}
