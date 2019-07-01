import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerCreateOrderCompComponent } from './dealer-create-order-comp.component';

describe('DealerCreateOrderCompComponent', () => {
  let component: DealerCreateOrderCompComponent;
  let fixture: ComponentFixture<DealerCreateOrderCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerCreateOrderCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerCreateOrderCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
