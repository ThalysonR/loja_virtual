import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { FormComponent } from './components/form/form.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
    declarations: [
        CatalogoComponent,
        FormComponent,
        CardComponent
    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule
    ],
    providers: []
})

export class ProdutoModule {}
