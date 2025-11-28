import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Markerlight } from './markerlight';

describe('Markerlight', () => {
  let component: Markerlight;
  let fixture: ComponentFixture<Markerlight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Markerlight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Markerlight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
