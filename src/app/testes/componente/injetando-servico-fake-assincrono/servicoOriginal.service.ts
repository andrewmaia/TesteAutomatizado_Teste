import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ServicoOriginal {
  constructor() { }
  obter(): Observable<string> {
    return of('RetornoAssincrono');
  }
}

