import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatToolComponent } from './creat-tool.component';

describe('CreatToolComponent', () => {
  let component: CreatToolComponent;
  let fixture: ComponentFixture<CreatToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
