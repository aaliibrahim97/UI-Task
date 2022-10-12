import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchDayComponent } from './watch-day.component';

describe('WatchDayComponent', () => {
  let component: WatchDayComponent;
  let fixture: ComponentFixture<WatchDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
