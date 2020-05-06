import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWorkInfoComponent } from './current-work-info.component';

describe('CurrentWorkInfoComponent', () => {
  let component: CurrentWorkInfoComponent;
  let fixture: ComponentFixture<CurrentWorkInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentWorkInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWorkInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
