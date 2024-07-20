import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  baseurl = "http://127.0.0.1:5000"; // mudar aqui dependendo da porta
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http:HttpClient) { }

  getAllMercados(): Observable<any> {
    return this.http.get(this.baseurl + '/api/mercados/',
                  {headers: this.httpHeaders})
  }


}
