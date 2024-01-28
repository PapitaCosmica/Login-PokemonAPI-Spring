import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroDetailsComponent } from './libro-details.component';

describe('LibroDetailsComponent', () => {
  let component: LibroDetailsComponent;
  let fixture: ComponentFixture<LibroDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibroDetailsComponent]
    });
    fixture = TestBed.createComponent(LibroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
