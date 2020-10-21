import { TesteComponent } from './teste.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

describe('Encontrando elementos html no componente', () => {
  let component: TesteComponent;
  let fixture: ComponentFixture<TesteComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    /*Cria o componente e adicionar ao "Simulador de DOM"*/
    /*Adicionado o modulo do forms para os testes que envolvem o ngModule*/
    TestBed.configureTestingModule({imports: [FormsModule], declarations: [TesteComponent]});
    fixture = TestBed.createComponent(TesteComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('Verifica de forma geral se o html do componente possui a palavra texto', () => {
    expect(element.textContent).toContain('texto');
  });

  it('Através de Seletor verifica se o componente possui um elemento span com a palavra texto', () => {
    const span = element.querySelector('span');
    expect(span.textContent).toEqual('texto');
  });
});



