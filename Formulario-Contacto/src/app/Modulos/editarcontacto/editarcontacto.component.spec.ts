import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcontactoComponent } from './editarcontacto.component';

describe('EditarComponent', () => {
  let component: EditarcontactoComponent;
  let fixture: ComponentFixture<EditarcontactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarcontactoComponent]
    });
    fixture = TestBed.createComponent(EditarcontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
