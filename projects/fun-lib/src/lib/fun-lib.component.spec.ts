import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunLibComponent } from './fun-lib.component';

describe('FunLibComponent', () => {
  let component: FunLibComponent;
  let fixture: ComponentFixture<FunLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
