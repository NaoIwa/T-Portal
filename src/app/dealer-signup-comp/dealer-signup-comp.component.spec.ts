import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerSignupCompComponent } from './dealer-signup-comp.component';

describe('DealerSignupCompComponent', () => {
  let component: DealerSignupCompComponent;
  let fixture: ComponentFixture<DealerSignupCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerSignupCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerSignupCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
