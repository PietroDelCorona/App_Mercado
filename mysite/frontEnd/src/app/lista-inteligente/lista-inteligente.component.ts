import { Component } from '@angular/core';
import { PageListaService } from './page-lista.service';
import { IProduto } from './IProdutos'
import { ILista } from './IListas';

@Component({
  selector: 'app-lista-inteligente',
  templateUrl: './lista-inteligente.component.html',
  styleUrls: ['./lista-inteligente.component.css']
})
export class ListaInteligenteComponent {
  newProduct: string = '';
  addedProducts: string[] = [];
  showCard: boolean = false;

  addProduct() {
    if (this.newProduct.trim() !== '') {
      this.addedProducts.push(this.newProduct.trim());
      this.newProduct = '';
    }
  }

  deleteProduct(product: string){
    console.log(product, 'produto!')
    const index = this.addedProducts.indexOf(product);
    if (index !== -1) {
      this.addedProducts.splice(index, 1);
    }
  }

  calculate(){
    this.showCard = true;
    // add lógica aqui dps
  }


  constructor(private pageListaService: PageListaService) {}

  obterTodasListas() {
    this.pageListaService.obterTodasList().subscribe(
      (listas: ILista[]) => {
        const lista = listas.map(listas => listas);
        console.log(lista);
      },
      error => {
        console.error('Erro ao obter listas', error);
      }
    );
  }


  obterTodosProdutos() {
    this.pageListaService.obterTodosProd().subscribe(
      (produtos: IProduto[]) => {
        const nomes = produtos.map(produto => produto.nome);
        console.log(nomes);
      },
      error => {
        console.error('Erro ao obter produtos', error);
      }
    );

  }}
