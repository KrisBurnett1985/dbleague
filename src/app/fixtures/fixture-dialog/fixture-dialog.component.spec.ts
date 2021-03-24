import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureDialogComponent } from './fixture-dialog.component';

describe('FixtureDialogComponent', () => {
  let component: FixtureDialogComponent;
  let fixture: ComponentFixture<FixtureDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixtureDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
