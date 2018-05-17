import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCatagoriesComponent } from './all-catagories.component';

describe('AllCatagoriesComponent', () => {
  let component: AllCatagoriesComponent;
  let fixture: ComponentFixture<AllCatagoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCatagoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCatagoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
