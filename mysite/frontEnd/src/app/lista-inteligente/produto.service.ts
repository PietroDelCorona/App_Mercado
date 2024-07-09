import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduto } from './IProdutos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  baseurl = "http://127.0.0.1:8000";

  constructor(private httpclient: HttpClient) { }

  obterTodos() {
    return this.httpclient.get<IProduto[]>(this.baseurl + '/api/produtos/')
  }
}
