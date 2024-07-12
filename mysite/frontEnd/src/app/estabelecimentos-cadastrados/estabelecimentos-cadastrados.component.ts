import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstabelecimentoService } from './estabelecimento.service';

@Component({
  selector: 'app-estabelecimentos-cadastrados',
  templateUrl: './estabelecimentos-cadastrados.component.html',
  styleUrl: './estabelecimentos-cadastrados.component.css',
  providers: [EstabelecimentoService]
})
export class EstabelecimentosCadastradosComponent{
  mercado: [] = [];

  constructor(private api: EstabelecimentoService){
    this.getMercados();
  }

  getMercados = () => {
    this.api.getAllMercados().subscribe(
      data => {
        this.mercado = data
      },
      error => {
        console.log(error)
      }
    )
  }


}
