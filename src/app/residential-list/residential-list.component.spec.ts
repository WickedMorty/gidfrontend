import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialListComponent } from './residential-list.component';

describe('ResidentialListComponent', () => {
  let component: ResidentialListComponent;
  let fixture: ComponentFixture<ResidentialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
