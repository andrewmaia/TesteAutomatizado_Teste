import { TesteComponent } from './teste.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

describe('Como criar e adicionar um componente ao simulador DOM', () => {
  let component: TesteComponent;
  let fixture: ComponentFixture<TesteComponent>;

  beforeEach(() => {
    /*Cria o componente e adicionar ao "Simulador de DOM"*/
    /*Adicionado o modulo do forms para os testes que envolvem o ngModule*/
    TestBed.configureTestingModule({imports: [FormsModule], declarations: [TesteComponent]});
    fixture = TestBed.createComponent(TesteComponent);
    component = fixture.componentInstance;
  });

  it('Verificando se o componente foi criado realmente', () => {
    expect(component).toBeDefined();
  });
});



