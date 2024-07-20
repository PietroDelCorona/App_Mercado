import { Component } from '@angular/core';
import { PageListaService } from './page-lista.service';
import { IProduto } from './IProdutos'
import { ILista } from './IListas';
import { IItensLista } from './IItensLista';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lista-inteligente',
  templateUrl: './lista-inteligente.component.html',
  styleUrls: ['./lista-inteligente.component.css']
})

export class ListaInteligenteComponent {
  newProduct: IProduto | undefined | null = null;
  addedProducts: IProduto[] = [];
  showCard: boolean = false;
  allProducts: IProduto[] | undefined;
  ultimaListaCompra: ILista | undefined;
  bestPrice: any;

  constructor(private pageListaService: PageListaService) { }

  ngOnInit() {
    this.obterTodosProdutos();
    this.criarLista();

  }

  addProduct() {
    if (this.newProduct && !this.addedProducts.includes(this.newProduct)) {
      this.addedProducts.push(this.newProduct);
      this.newProduct = null;
    } else {
      console.warn('Produto já adicionado ou inválido');
    }
  }

  onProductChange(event: any) {
    this.newProduct = event;
  }

  removeProduct(product: IProduto) {
    this.addedProducts = this.addedProducts.filter(p => p !== product);
  }

 calculate() {
    this.adicionarTodosItens();
      setTimeout(() => {
        this.pageListaService.functionCalculate().subscribe(response => {
          this.bestPrice = response;
          this.showCard = true;

        });
    }, 1050);
  
  }

  criarLista() {
    const atualDate = new Date();

    const novaLista = {
      data_lista: atualDate.toISOString().slice(0, 10),
      usuario_id: 2 // PENDENTE - esperar pietro
    };
    this.pageListaService.criarListaNovaAoCalcular(novaLista).subscribe(response => {
      this.obterUltimaLista();
      console.log('List added:', response);
    });
  }

  adicionarTodosItens() {
    for (var item of this.addedProducts) {
      const newProduct = {
        quantidade: 1,
        lista_compra_id: this.ultimaListaCompra?.id,
        produto_id: item.id
      }
      this.adicionarItem(newProduct);
    }
  }

  adicionarItem(product: any) {
    this.pageListaService.addItemListaCompra(product).subscribe(response => {
      console.log('Item added:', response);
    });
  };

  obterUltimaLista() {
    this.pageListaService.obterUltimaListaCompra().subscribe(
      (lista: ILista) => {
        this.ultimaListaCompra = lista;
        console.log('Última lista de compras:', lista);
      },
      error => {
        console.error('Erro ao obter a última lista de compras:', error);
      }
    );
  }

  obterItensDaLista() {
    this.pageListaService.obterItensList().subscribe(
      (listas: IItensLista[]) => {
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
        this.allProducts = produtos;
      },
      error => {
        console.error('Erro ao obter produtos', error);
      }
    );
  }

}


