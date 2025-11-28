import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zertifikate } from './zertifikate';

describe('Zertifikate', () => {
  let component: Zertifikate;
  let fixture: ComponentFixture<Zertifikate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zertifikate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zertifikate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
