import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanResorcesComponent } from './human-resorces.component';

describe('HumanResorcesComponent', () => {
  let component: HumanResorcesComponent;
  let fixture: ComponentFixture<HumanResorcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanResorcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanResorcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
