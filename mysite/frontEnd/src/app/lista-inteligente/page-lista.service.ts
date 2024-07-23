import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduto } from './IProdutos';
import { ILista } from './IListas';
import { map, Observable } from 'rxjs';
import { IItensLista } from './IItensLista';
@Injectable({
  providedIn: 'root'
})
export class PageListaService {
  baseurl = "http://127.0.0.1:8000";
  private userId: any;


  constructor(private httpclient: HttpClient) { }

  setUserId(id: any): void {
    this.userId = id;
  }

  getUserId(): any {
    return this.userId;
  }

  obterItensList() {
    return this.httpclient.get<IItensLista[]>(this.baseurl + '/api/itens-lista-compra/filter/2/')
  }


  obterTodosProd() {
    return this.httpclient.get<IProduto[]>(this.baseurl + '/api/produtos/')
  }


  addItemListaCompra(item:any): Observable<any> {
    return this.httpclient.post(this.baseurl + '/api/itens-lista-compra/', item)
  }

  criarListaNovaAoCalcular(lista:any): Observable<any> {
    return this.httpclient.post(this.baseurl + '/api/listas-compras/', lista)
  }

  obterUltimaListaCompra(): Observable<ILista> {
    return this.httpclient.get<ILista[]>(this.baseurl + '/api/listas-compras/').pipe(
      map(listas => listas.reduce((prev, current) => (prev.id > current.id) ? prev : current))
    );
  }


  functionCalculate() {
    return this.httpclient.get<any>(this.baseurl + '/resultado_lista/')
  }

}
