import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../../../../../swagger';

@Component({
    selector: 'produto-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent {
    @Input() produto: Produto;
}
