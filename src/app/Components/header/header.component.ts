/* 
  Este componente define um cabeçalho que exibe uma barra de ferramentas 
  com um ícone SVG personalizado. O ícone SVG é registrado dinamicamente 
  para ser utilizado no template. 
*/

import {Component} from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import { DomSanitizer } from '@angular/platform-browser';
import {MatIconRegistry, MatIconModule} from '@angular/material/icon';


const DOG_BARKING = 
`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#000000">
  <path d="M194-80v-416h60v356h320v-223l102-102q30-30 46-68.5t16-80.5q0-42-16.5-80.5T676-762l-32-33-131 131H333l-53 53-43-42 71-71h180l156-156 75 75q38 38 58 87.5T798-614q-1 54-21 103.5T719-423l-85 85v258H194Zm187-215L180-496q-10-10-15-22.5t-5-26.5q0-14 5-27t15-23l77-78 117 116q27 27 41.5 61.5T430-423q0 35-12.5 68.5T381-295Z"/>
  </svg>
`
;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
})
export class HeaderComponent {
  constructor (sanitizer: DomSanitizer, iconRegistry: MatIconRegistry){
    iconRegistry.addSvgIconLiteral('dog-barking',sanitizer.bypassSecurityTrustHtml(DOG_BARKING));
  }
}
