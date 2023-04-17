import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public image:string='https://www.nationalgeographic.com.es/medio/2023/02/21/pastor-belga-2_768dc695_230221204100_800x800.jpg'
  public Titulo:string='Curso de Angular con Interpolación'
}
