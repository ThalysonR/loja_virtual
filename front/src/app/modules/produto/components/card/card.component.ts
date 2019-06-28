import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from '../../../../../swagger';

@Component({
  selector: 'produto-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() produto: Produto;
  @Output() remover: EventEmitter<number> = new EventEmitter<number>();
}
