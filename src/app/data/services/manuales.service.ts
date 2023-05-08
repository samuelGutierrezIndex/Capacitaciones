import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseApi } from '@data/interfaces/response-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManualesService {

  private URL_API: string;

  constructor(
    private http: HttpClient
  ) {
    this.URL_API = '';
  }

  /**
   * 
   * @returns Retorna todo los manuales de la API.
   */
  getManuales():Observable<ResponseApi>{
    return this.http.get(`${this.URL_API}/manuales`);
  }
}
