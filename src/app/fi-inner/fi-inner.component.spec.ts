import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiInnerComponent } from './fi-inner.component';

describe('FiInnerComponent', () => {
  let component: FiInnerComponent;
  let fixture: ComponentFixture<FiInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
