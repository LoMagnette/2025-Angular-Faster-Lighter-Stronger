import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheepDialog } from './sheep-dialog';

describe('SheepDialog', () => {
  let component: SheepDialog;
  let fixture: ComponentFixture<SheepDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SheepDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheepDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
