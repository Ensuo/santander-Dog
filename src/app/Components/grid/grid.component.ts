
/* 
 *Este componente representa a grid utilizada para apresentar as imagens dos cachorros, no formato 5x3.
 *As variáveis dogImages e bonusImages são utilizadas para armazenar os dados obtidos pela API, sendo 
 *respectivamente as imagens carregadas e as que ainda vão ser carregadas. 
 *Todas as funções presentes são utilizadas para requisitar mais imagens da API e alterar a grid atual.
*/

import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule} from '@angular/material/button'


import { ImageService } from 'src/app/Service/image.service';
import { DogInfo } from 'src/app/Models/dogInfo';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  standalone: true,
  imports: [MatGridListModule,CommonModule, MatButtonModule],
})
export class GridComponent implements OnInit{
  dogImages: DogInfo[] = [];
  bonusImages: DogInfo[] = [];

  constructor(private imageService: ImageService){}

  //15 é o valor de imagens a serem requisitadas. Valor arbitrariamente escolhido
  ngOnInit(): void{
    this.getDogImages(15);
    this.getMoreDogImages(15);
  }

  getDogImages(limit: number): void {
    this.imageService.getImageData(limit).subscribe(dogImages => this.dogImages = dogImages);
  }

  getMoreDogImages(limit: number): void{
    this.imageService.getImageData(limit).subscribe(bonusImages => this.bonusImages = bonusImages);
  }

  addMore(): void{
    this.dogImages = this.dogImages.concat(this.bonusImages);
    this.getMoreDogImages(15);
  }

  print(): void{
    console.log(this.dogImages);
  }
}
