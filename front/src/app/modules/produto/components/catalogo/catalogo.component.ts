import { Component, OnInit } from '@angular/core';
import { ProdutoControllerService, Produto } from '../../../../../swagger';
import { ActivatedRoute } from '@angular/router';
import { map, flatMap } from 'rxjs/operators';

@Component({
    selector: 'produto-catalogo',
    templateUrl: './catalogo.component.html',
    styleUrls: ['./catalogo.component.scss']
})

export class CatalogoComponent implements OnInit {
    constructor(private _produtoController: ProdutoControllerService,
        private route: ActivatedRoute) {}

    public produtos: Array<Produto> = [];
    public paginaAtual: number = 0;
    public paginas: Array<number>;
    
    ngOnInit() {
        const size = '12';
        this.route.queryParams
        .pipe(
            map(params => {
                if (params.page == null) {
                    return {page: '0'}
                } else {
                    return params;
                }
            }),
            flatMap(params => this._produtoController.getProdutosUsingGET(params.page, size))
        )
        .subscribe(prodPage => {
            console.log(prodPage);
            this.produtos = prodPage.content;
            this.paginaAtual = prodPage.number;
            // @ts-ignore
            this.paginas = Array(prodPage.totalPages).fill().map((x,i)=>i);
        });
    }
}
