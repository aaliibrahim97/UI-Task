import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialBtnsComponent } from './social-btns.component';

describe('SocialBtnsComponent', () => {
  let component: SocialBtnsComponent;
  let fixture: ComponentFixture<SocialBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialBtnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
