import { TesteComponent } from './teste.component';
import { TestBed } from '@angular/core/testing';
import { TesteService } from './teste.service';

describe('Componente com Serviço Injetado', () => {
    let comp: TesteComponent;


    beforeEach(() => {

      TestBed.configureTestingModule({
          providers: [
              TesteComponent,
              /*Neste ponto que se injeta o serviço que o componente irá utilizar*/
              { provide: TesteService, useClass: TesteService }
          ]
        });
      /*Obtem o componente já com o serviço injetado*/
      comp = TestBed.get(TesteComponent);
    });

    it('Antes de chamar o serviço', () => {
      expect(comp.valorServico).toBeUndefined();
    });

    it('Depois de chamar o serviço', () => {
      comp.ngOnInit();
      expect(comp.valorServico).toBe('ValorServico');
    });
  });


