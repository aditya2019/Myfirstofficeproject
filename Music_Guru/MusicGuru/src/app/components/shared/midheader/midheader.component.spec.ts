import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidheaderComponent } from './midheader.component';

describe('MidheaderComponent', () => {
  let component: MidheaderComponent;
  let fixture: ComponentFixture<MidheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
