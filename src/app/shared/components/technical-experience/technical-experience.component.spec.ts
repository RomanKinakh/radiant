import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalExperienceComponent } from './technical-experience.component';

describe('TechnicalExperienceComponent', () => {
  let component: TechnicalExperienceComponent;
  let fixture: ComponentFixture<TechnicalExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
