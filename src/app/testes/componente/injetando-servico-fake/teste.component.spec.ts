import { TesteComponent } from './teste.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TesteService } from './teste.service';



describe('Componente com Serviço Fake Injetado', () => {
  let component: TesteComponent;
  let fixture: ComponentFixture<TesteComponent>;
  let servicoFake: Partial<TesteService>;

  beforeEach(() => {
      servicoFake = {
        obter(): string {
          return 'ValorServicoFake';
        }
      };

      TestBed.configureTestingModule({
          declarations: [ TesteComponent ],
          providers: [
              /*Neste ponto que se injeta o serviço fake que o componente irá utilizar*/
              { provide: TesteService, useValue: servicoFake }
          ]
        });

      fixture = TestBed.createComponent(TesteComponent);
      component  = fixture.componentInstance;
    });

  it('Verificando propriedade do componente que provem do serviço fake', () => {
      component.ngOnInit();
      expect(component.valorServico).toBe('ValorServicoFake');
    });
  });


