import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import {catchError} from 'rxjs/operators';

import { DogInfo } from '../Models/dogInfo';  
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private url: string = "https://api.thedogapi.com/v1/images/search"; 
  private api_key = environment.API_KEY;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': this.api_key
    })
  };

  constructor(private http: HttpClient) {}

  /** 
   * Função responsável pelos requests das imagens na API
   * 
   * @param limit - quantidade de imagens sendo solicitadas
   */
  
  getImageData(limit: number): Observable<DogInfo[]> {
    return this.http.get<DogInfo[]>(this.url + `?limit=${limit}&has_breeds=1`, this.httpOptions)
      .pipe(
        catchError(this.handleError<DogInfo[]>('getImageData', []))
    ); 
  }
  
  /**
   * 
   * @param operation - Nome da operação que falhou
   * @param result - Valor opcional, retornado como o resultado do tipo Observable 
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
}


