import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostViewComponent } from './most-view.component';

describe('MostViewComponent', () => {
  let component: MostViewComponent;
  let fixture: ComponentFixture<MostViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
