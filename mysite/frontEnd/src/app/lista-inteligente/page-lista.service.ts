import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduto } from './IProdutos';
import { ILista } from './IListas';
@Injectable({
  providedIn: 'root'
})
export class PageListaService {
  baseurl = "http://127.0.0.1:8000";

  constructor(private httpclient: HttpClient) { }

  idListaCompra = '2'

  obterTodasList() {
    return this.httpclient.get<ILista[]>(this.baseurl + '/api/itens-lista-compra/filter/2/')
  }


  obterTodosProd() {
    return this.httpclient.get<IProduto[]>(this.baseurl + '/api/produtos/')
  }
}
