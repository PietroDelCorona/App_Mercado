import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-inteligente',
  templateUrl: './lista-inteligente.component.html',
  styleUrls: ['./lista-inteligente.component.css']
})
export class ListaInteligenteComponent {
  newProduct: string = '';
  addedProducts: string[] = [];

  addProduct() {
    if (this.newProduct.trim() !== '') {
      this.addedProducts.push(this.newProduct.trim());
      this.newProduct = '';
    }
  }

  deleteProduct(product: string){
    
  }
}
