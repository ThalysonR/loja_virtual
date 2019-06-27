import { Component, OnInit } from '@angular/core';
import { ProdutoControllerService } from '../../../../swagger';

@Component({
    selector: 'home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    constructor(private produtoController: ProdutoControllerService) {}

    ngOnInit() {
        this.produtoController.getProdutosUsingGET('0', '10')
        .subscribe(page => {
            page.content.forEach(console.log);
        });
    }
}
