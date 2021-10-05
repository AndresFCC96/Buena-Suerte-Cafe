import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioManagementComponent } from './usuario-management.component';

describe('UsuarioManagementComponent', () => {
  let component: UsuarioManagementComponent;
  let fixture: ComponentFixture<UsuarioManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
