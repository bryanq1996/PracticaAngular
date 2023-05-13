import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarcontactoComponent } from './listarcontacto.component';

describe('ListarcontactoComponent', () => {
  let component: ListarcontactoComponent;
  let fixture: ComponentFixture<ListarcontactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarcontactoComponent]
    });
    fixture = TestBed.createComponent(ListarcontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
