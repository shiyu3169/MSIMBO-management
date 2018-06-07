import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiDetailComponent } from './wiki-detail.component';

describe('WikiDetailComponent', () => {
  let component: WikiDetailComponent;
  let fixture: ComponentFixture<WikiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
