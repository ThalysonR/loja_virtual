import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { ProdutoControllerService } from '../../../../../swagger';
import { ToastService } from '../../../../shared/services/toast.service';

@Component({
  selector: 'produto-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _produtoController: ProdutoControllerService,
    private _router: Router,
    private _toastService: ToastService,
  ) {}

  private idEdit: number;
  produtoForm: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required),
    preco: new FormControl('', Validators.required),
  });
  edit: boolean;
  titulo = 'Cadastrar novo produto';

  onSubmit() {
    of({})
      .pipe(
        flatMap(() => {
          if (this.edit) {
            return this._produtoController.updateProdutoUsingPUT(
              this.idEdit,
              this.produtoForm.value,
            );
          } else {
            return this._produtoController.cadastraProdutoUsingPOST(this.produtoForm.value);
          }
        }),
      )
      .subscribe(
        () => {
          this._toastService.success('Produto salvo com sucesso!');
          this._router.navigate(['/produto']);
        },
        err => this._toastService.error(`Falha ao salvar: ${err.message}`),
      );
  }

  private verificaEdit() {
    this._activatedRoute.queryParams
      .pipe(
        flatMap(params => {
          console.log(params);
          if (params.edit) return this._produtoController.getProdutoUsingGET(+params.edit);
          return of({});
        }),
      )
      .subscribe(produto => {
        console.log(produto);
        if (produto['nome']) {
          this.produtoForm.setValue({
            nome: produto['nome'] || '',
            descricao: produto['descricao'] || '',
            preco: produto['preco'] || '',
          });
          this.edit = true;
          this.idEdit = produto['id'];
          this.titulo = `Editar ${produto['nome']}`;
        } else {
          this.produtoForm.reset();
          this.titulo = 'Cadastrar novo produto';
          this.edit = false;
        }
      });
  }

  ngOnInit() {
    this.verificaEdit();
    // this._router.events.subscribe(event => this.verificaEdit());
  }
}
