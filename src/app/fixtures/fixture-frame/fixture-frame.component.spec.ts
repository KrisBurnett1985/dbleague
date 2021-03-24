import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureFrameComponent } from './fixture-frame.component';

describe('FixtureFrameComponent', () => {
  let component: FixtureFrameComponent;
  let fixture: ComponentFixture<FixtureFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixtureFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
