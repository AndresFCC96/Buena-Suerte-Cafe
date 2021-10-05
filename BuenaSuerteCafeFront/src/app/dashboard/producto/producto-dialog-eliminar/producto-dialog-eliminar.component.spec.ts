import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoDialogEliminarComponent } from './producto-dialog-eliminar.component';

describe('ProductoDialogEliminarComponent', () => {
  let component: ProductoDialogEliminarComponent;
  let fixture: ComponentFixture<ProductoDialogEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoDialogEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoDialogEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
