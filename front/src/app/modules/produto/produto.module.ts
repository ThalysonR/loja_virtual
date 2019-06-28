import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ToastService } from '../../shared/services/toast.service';
import { CardComponent } from './components/card/card.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { FormComponent } from './components/form/form.component';
import { ProdutoRoutingModule } from './produto-routing.module';

@NgModule({
  declarations: [CatalogoComponent, FormComponent, CardComponent],
  imports: [CommonModule, ProdutoRoutingModule, ReactiveFormsModule, CurrencyMaskModule],
  providers: [ToastService],
})
export class ProdutoModule {}
