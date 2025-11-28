import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Videotechnik } from './videotechnik';

describe('Videotechnik', () => {
  let component: Videotechnik;
  let fixture: ComponentFixture<Videotechnik>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Videotechnik]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Videotechnik);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
