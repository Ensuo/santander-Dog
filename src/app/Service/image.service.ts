import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { DogInfo } from '../Models/dogInfo';  

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private url: string = `https://api.thedogapi.com/v1/images/search`; 
  private api_key = 'live_T0TPZV8utf05MBb6y6GWI2d33Qw5S2vaa7bhU8EluJjhiyWzgMgzbseBdATV81ry';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': this.api_key
    })
  };

  constructor(private http: HttpClient) {}

  //Função recebe como parâmetros a quantidade de imagens a serem solicitadas e
  //re
  getImages(limit: number): Observable<DogInfo[]> {
    return this.http.get<DogInfo[]>(this.url + `?limit=${limit}&has_breeds=1`, this.httpOptions).pipe(
      tap(_ => console.log(_))
    ); 
  }
}
