import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerProfileCompComponent } from './dealer-profile-comp.component';

describe('DealerProfileCompComponent', () => {
  let component: DealerProfileCompComponent;
  let fixture: ComponentFixture<DealerProfileCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerProfileCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerProfileCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
