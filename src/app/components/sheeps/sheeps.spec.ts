import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sheeps } from './sheeps';

describe('Sheeps', () => {
  let component: Sheeps;
  let fixture: ComponentFixture<Sheeps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sheeps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sheeps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
