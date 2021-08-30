import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarcarouselComponent } from './carcarousel.component';

describe('CarcarouselComponent', () => {
  let component: CarcarouselComponent;
  let fixture: ComponentFixture<CarcarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarcarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
