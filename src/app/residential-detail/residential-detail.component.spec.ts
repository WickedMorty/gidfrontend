import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialDetailComponent } from './residential-detail.component';

describe('ResidentialDetailComponent', () => {
  let component: ResidentialDetailComponent;
  let fixture: ComponentFixture<ResidentialDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentialDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentialDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
