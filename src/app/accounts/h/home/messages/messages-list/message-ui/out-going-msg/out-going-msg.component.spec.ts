import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutGoingMsgComponent } from './out-going-msg.component';

describe('OutGoingMsgComponent', () => {
  let component: OutGoingMsgComponent;
  let fixture: ComponentFixture<OutGoingMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutGoingMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutGoingMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
