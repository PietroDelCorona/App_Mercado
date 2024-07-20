import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstabelecimentoService } from './estabelecimento.service';

export interface Mercado {
  id: number,
  nome: string,
  endereco: string,
  distancia: string
}

@Component({
  selector: 'app-estabelecimentos-cadastrados',
  templateUrl: './estabelecimentos-cadastrados.component.html',
  styleUrl: './estabelecimentos-cadastrados.component.css',
  providers: [EstabelecimentoService]
})
export class EstabelecimentosCadastradosComponent {
  mercado: Mercado[] = [];
  srcMap: string = '';

  constructor(private api: EstabelecimentoService) {
    this.getMercados();
  }

  getMercados = () => {
    this.mercado = [
      {
        id: 1,
        nome: 'Mercado da Lima e Silva',
        endereco: 'R. Gen. Lima e Silva, 120',
        distancia: '170m'
      },
      {
        id: 2,
        nome: 'Zaffari Fernando Machado',
        endereco: 'R. Cel. Fernando Machado, 860',
        distancia: '270m'
      },
      {
        id: 3,
        nome: 'Zaffari Lima e Silva',
        endereco: 'R. Gen. Lima e Silva, 606',
        distancia: '650m'
      }
    ];

  }

  setMercado(id: number) {
    const selectedMercado = this.mercado.filter(x => x.id === id);
    const iframeContainer = document.getElementById('iframeContainer');
    if (iframeContainer) {
      iframeContainer.innerHTML = '';

    }
    const iframe = document.createElement('iframe');

    iframe.setAttribute('width', '90%');
    iframe.setAttribute('height', '550px');
    iframe.setAttribute('style', 'border:0;');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');


    if (selectedMercado[0].nome == 'Mercado da Lima e Silva') {
      iframe.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1727.0313849628562!2d-51.226254!3d-30.035057!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197901361a22cb%3A0x50ec32610aace25!2sMercado%20da%20Lima%20e%20Silva!5e0!3m2!1sen!2sbr!4v1720572968766!5m2!1sen!2sbr');
      iframeContainer?.appendChild(iframe);
    } else if (selectedMercado[0].nome == 'Zaffari Fernando Machado'){
      iframe.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6908.165761738939!2d-51.227757!3d-30.034480000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979046a38dac1%3A0x73999db949daee26!2sZaffari%20Fernando%20Machado!5e0!3m2!1sen!2sbr!4v1720573042773!5m2!1sen!2sbr');
      iframeContainer?.appendChild(iframe);
    } else if (selectedMercado[0].nome == 'Zaffari Lima e Silva'){
      iframe.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6908.08287829611!2d-51.226673582031246!3d-30.03566898708424!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979aaaa6dd0ef%3A0xeba2b793fc7b5ad4!2sZaffari%20Lima%20e%20Silva!5e0!3m2!1sen!2sbr!4v1720573053383!5m2!1sen!2sbr');
      iframeContainer?.appendChild(iframe);

    }

  }


}
