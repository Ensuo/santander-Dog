import { Component, OnInit} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button'

import { ImageService } from 'src/app/Service/image.service';
import { DogInfo } from 'src/app/Models/dogInfo';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, CommonModule, MatButtonModule],
})
export class GridComponent implements OnInit{
  dogImages: DogInfo[] = [];
  bonusImages: DogInfo[] = [];

  constructor(private imageService: ImageService){}

  ngOnInit(): void{
    this.getDogImages(15, true);
    this.getMoreDogImages(15, true);
  }

  getDogImages(limit: number, has_breeds: boolean): void {
    this.imageService.getImages(limit, has_breeds).subscribe(dogImages => this.dogImages = dogImages);
  }

  getMoreDogImages(limit: number, has_breeds: boolean): void{
    this.imageService.getImages(limit, has_breeds).subscribe(bonusImages => this.bonusImages = bonusImages);
  }

  addMore(): void{
    this.dogImages = this.dogImages.concat(this.bonusImages);
    this.getMoreDogImages(15, true);
  }

  print(): void{
    console.log(this.dogImages);
  }
}
