import { TesteComponent } from './teste.component';
import { ServicoOriginal } from './servicoOriginal.service';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { of } from 'rxjs';

describe('Componente com que chama um serviço fake e assincrono', () => {
    let component: TesteComponent;
    let fixture: ComponentFixture<TesteComponent>;
    let el;
    let servicoSpy: any;
    beforeEach(() => {

        const servicoFake = jasmine.createSpyObj('ServicoOriginal', ['obter']);
        servicoSpy = servicoFake.obter.and.returnValue( of('RetornoAssincrono') );

        TestBed.configureTestingModule({
          declarations: [ TesteComponent ],
          providers:    [
            { provide: ServicoOriginal, useValue: servicoFake }
          ]
        });

        fixture = TestBed.createComponent(TesteComponent);
        component = fixture.componentInstance;
        el = fixture.nativeElement.querySelector('.retorno');
    });

    it('Depois que aperta o botão deve atualizar a msg com o metodo assincrono', () => {
        /*Método do botão*/
        component.obter();
        /*Comando necessário para que os elementos html do componente sejam atualizados*/
        fixture.detectChanges();
        expect(el.textContent).toBe('RetornoAssincrono');
    });
});