import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueTableDialogComponent } from './league-table-dialog.component';

describe('LeagueTableDialogComponent', () => {
  let component: LeagueTableDialogComponent;
  let fixture: ComponentFixture<LeagueTableDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueTableDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueTableDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
