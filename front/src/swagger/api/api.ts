export * from './basicErrorController.service';
import { BasicErrorControllerService } from './basicErrorController.service';
export * from './produtoController.service';
import { ProdutoControllerService } from './produtoController.service';
export const APIS = [BasicErrorControllerService, ProdutoControllerService];
