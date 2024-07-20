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
  newProduct: string = '';
  addedProducts: string[] = [];
  showCard: boolean = false;
  ultimaListaCompra: ILista | undefined;






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
    this.pageListaService.functionCalculate().subscribe(response => {
      console.log(response)
    })
  }


  constructor(private pageListaService: PageListaService) {}


  ngOnInit() {
    this.criarLista(); //CRIA NOVA LISTA AO ENTRAR NA PAGINA

  }


  criarLista() {
    //const atualDate =new Date();
    //const formattedDate = ${atualDate. }/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDat.getDate().toString().padStart(2, '0')};
    const novaLista = {
      data_lista: '2024-07-24', // COMO ADICIONAR DATA YYYY/MM/DD
      usuario_id: 2 // preciso do login
    };
    this.pageListaService.criarListaNovaAoCalcular(novaLista).subscribe(response => {
      this.ObterUltimaLista();
      console.log('List added:', response);
      //precisa date

    });
  }

  newItem = {
    quantidade: 1, // talvez estatico  ??
    lista_compra_id: 2,
    produto_id: 3 // vai vir do dropdown
  };


  // FUNÇÃO QUE ADICIONAR TODOS ITENS DA LISTA DO FRONT
  //adicionarTodosItens() {
    //for (var item of this.addedProducts) {
      //this.newItem.produto_id = item.id //o "this.newProduct" vai virar um objeto?
      //this.adicionarItem()
    //}
  //}


  adicionarItem() {
    this.pageListaService.addItemListaCompra(this.newItem).subscribe(response => {
      console.log('Item added:', response);
    });
  };



  ObterUltimaLista() {
    this.pageListaService.obterUltimaListaCompra().subscribe(
      (lista: ILista) => {
        this.ultimaListaCompra = lista;
        this.newItem.lista_compra_id = lista.id; // Atualiza o ID da lista de compras
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
        const nomes = produtos.map(produto => produto.nome);
        console.log(nomes);
      },
      error => {
        console.error('Erro ao obter produtos', error);
      }
    );
  }



}


