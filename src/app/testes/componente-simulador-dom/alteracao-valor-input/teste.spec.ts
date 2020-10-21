import { TestBed, ComponentFixture, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TesteComponent } from './teste.component';

describe('Simulando a alteração de valor de Input', () => {
  let component: TesteComponent;
  let fixture: ComponentFixture<TesteComponent>;
  let  input: HTMLInputElement;
  let display: HTMLElement ;
  beforeEach(() => {
    /*Cria o componente e adicionar ao "Simulador de DOM"*/
    /*Adicionado o modulo do forms para os testes que envolvem o ngModule*/
    TestBed.configureTestingModule({imports: [FormsModule], declarations: [TesteComponent]});
    fixture = TestBed.createComponent(TesteComponent);
    component = fixture.componentInstance;
    input=  fixture.nativeElement.querySelector('input');
    display= fixture.nativeElement.querySelector('a');
  });


  it('Seleciona o elemento input, altera-se o valor dele, e verifica-se o ngModel espelha a alteração', () => {
    fixture.detectChanges();
    input.value = 'Texto Input';

    /*Necessário rodar esses 2 comando para que o angular saiba que o input foi alterado e espelhe para o ngModel*/
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(display.textContent).toBe('Texto Input');
  });

});



