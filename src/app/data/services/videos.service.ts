import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Videos } from '@data/interfaces/videos';
import { ApiClass } from '@data/schemas/ApiClass.class';
import { Observable, catchError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideosService extends ApiClass  { 

  /**
   * 
   * @returns todos los videos de la API.
   */
  getAllVideos():Observable<Videos[]>{
    return this.http.get<Videos[]>(`${this.uri}/videos`).pipe(
      retry(3), // Reintentar hasta 3 veces si hay un error
      catchError(this.handleError) // Manejar errores
    );
  }

}
