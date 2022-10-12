import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSection2Component } from './map-section2.component';

describe('MapSection2Component', () => {
  let component: MapSection2Component;
  let fixture: ComponentFixture<MapSection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapSection2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
