import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsDialogComponent } from './blogs-dialog.component';

describe('BlogsDialogComponent', () => {
  let component: BlogsDialogComponent;
  let fixture: ComponentFixture<BlogsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
