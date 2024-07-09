import { Component } from '@angular/core';

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
}
