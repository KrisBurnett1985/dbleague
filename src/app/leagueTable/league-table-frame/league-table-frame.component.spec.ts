import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueTableFrameComponent } from './league-table-frame.component';

describe('LeagueTableFrameComponent', () => {
  let component: LeagueTableFrameComponent;
  let fixture: ComponentFixture<LeagueTableFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueTableFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueTableFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
