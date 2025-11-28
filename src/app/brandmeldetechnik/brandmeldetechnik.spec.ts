import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Brandmeldetechnik } from './brandmeldetechnik';

describe('Brandmeldetechnik', () => {
  let component: Brandmeldetechnik;
  let fixture: ComponentFixture<Brandmeldetechnik>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Brandmeldetechnik]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Brandmeldetechnik);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
