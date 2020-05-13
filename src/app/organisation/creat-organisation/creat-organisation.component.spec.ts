import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatOrganisationComponent } from './creat-organisation.component';

describe('CreatOrganisationComponent', () => {
  let component: CreatOrganisationComponent;
  let fixture: ComponentFixture<CreatOrganisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatOrganisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatOrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
