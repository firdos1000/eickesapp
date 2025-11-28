import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Einbruchschutz } from './einbruchschutz';

describe('Einbruchschutz', () => {
  let component: Einbruchschutz;
  let fixture: ComponentFixture<Einbruchschutz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Einbruchschutz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Einbruchschutz);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
