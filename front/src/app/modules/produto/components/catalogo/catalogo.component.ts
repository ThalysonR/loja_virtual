import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize, flatMap, map } from 'rxjs/operators';
import { Produto, ProdutoControllerService } from '../../../../../swagger';
import { ToastService } from '../../../../shared/services/toast.service';

@Component({
  selector: 'produto-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
})
export class CatalogoComponent implements OnInit {
  constructor(
    private _produtoController: ProdutoControllerService,
    private route: ActivatedRoute,
    private _toastService: ToastService,
  ) {}
  @ViewChild('modal') modalRef: ElementRef;

  public produtos: Array<Produto> = [];
  public paginaAtual: number = 0;
  public paginas: Array<number>;
  public totalPaginas: number = 0;
  private modal: any;
  private produtoRemover: Produto = {};

  public modalConfirma(produto: Produto) {
    this.produtoRemover = produto;
    this.modal.open();
  }

  public excluirProduto() {
    this._produtoController
      .deleteProdutoUsingDELETE(this.produtoRemover.id)
      .pipe(finalize(() => this.modal.close()))
      .subscribe(
        () => {
          this._toastService.success('Produto excluído com sucesso');
          this.produtos.splice(
            this.produtos.findIndex(produto => this.produtoRemover.id == produto.id),
            1,
          );
        },
        err => this._toastService.error(`Falha ao excluir: ${err.message}`),
      );
  }

  ngOnInit() {
    this.modal = M.Modal.init(this.modalRef.nativeElement);
    const size = '12';
    this.route.queryParams
      .pipe(
        map(params => {
          if (params.page == null) {
            return { page: '0' };
          } else {
            return params;
          }
        }),
        flatMap(params => this._produtoController.getProdutosUsingGET(params.page, size)),
      )
      .subscribe(
        prodPage => {
          this.produtos = prodPage.content;
          this.paginaAtual = prodPage.number;
          // @ts-ignore
          this.paginas = Array(prodPage.totalPages)
            .fill()
            // @ts-ignore
            .map((x, i) => i);
          this.totalPaginas = prodPage.totalPages;
        },
        err => this._toastService.error(`Falha ao carregar produtos: ${err.message}`),
      );
  }
}
