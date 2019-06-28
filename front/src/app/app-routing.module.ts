import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HomeComponent } from './shared/components/home/home.component';

const appRoutes: Routes = [
  // { path: 'menu', loadChildren: './modules/menu/menu.module#MenuModule' },
  { path: 'produto', loadChildren: './modules/produto/produto.module#ProdutoModule' },
  { path: '', redirectTo: '/produto', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
