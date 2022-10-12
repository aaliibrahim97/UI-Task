import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestTradeComponent } from './latest-trade.component';

describe('LatestTradeComponent', () => {
  let component: LatestTradeComponent;
  let fixture: ComponentFixture<LatestTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestTradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
