import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaluteComponent } from './calculator.component';

describe('SaluteComponent', () => {
  let component: SaluteComponent;
  let fixture: ComponentFixture<SaluteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaluteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaluteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
