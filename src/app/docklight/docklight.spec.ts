import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Docklight } from './docklight';

describe('Docklight', () => {
  let component: Docklight;
  let fixture: ComponentFixture<Docklight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Docklight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Docklight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
