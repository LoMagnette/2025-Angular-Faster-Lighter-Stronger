import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheepCard } from './sheep-card';

describe('SheepCard', () => {
  let component: SheepCard;
  let fixture: ComponentFixture<SheepCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SheepCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheepCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
