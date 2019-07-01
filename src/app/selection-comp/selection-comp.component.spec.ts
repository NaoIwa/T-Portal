import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionCompComponent } from './selection-comp.component';

describe('SelectionCompComponent', () => {
  let component: SelectionCompComponent;
  let fixture: ComponentFixture<SelectionCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
