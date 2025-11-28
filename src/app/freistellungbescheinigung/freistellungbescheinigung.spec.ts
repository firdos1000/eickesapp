import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Freistellungbescheinigung } from './freistellungbescheinigung';

describe('Freistellungbescheinigung', () => {
  let component: Freistellungbescheinigung;
  let fixture: ComponentFixture<Freistellungbescheinigung>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Freistellungbescheinigung]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Freistellungbescheinigung);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
