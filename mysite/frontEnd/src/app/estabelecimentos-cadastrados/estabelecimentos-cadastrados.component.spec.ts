import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentosCadastradosComponent } from './estabelecimentos-cadastrados.component';

describe('EstabelecimentosCadastradosComponent', () => {
  let component: EstabelecimentosCadastradosComponent;
  let fixture: ComponentFixture<EstabelecimentosCadastradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstabelecimentosCadastradosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstabelecimentosCadastradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
