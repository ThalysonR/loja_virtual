import { Injectable } from '@angular/core';

@Injectable()
export class ToastService {
  public success(texto: string) {
    M.toast({ html: texto, classes: 'toast-success' });
  }

  public error(texto: string) {
    M.toast({ html: texto, classes: 'toast-error' });
  }
}
