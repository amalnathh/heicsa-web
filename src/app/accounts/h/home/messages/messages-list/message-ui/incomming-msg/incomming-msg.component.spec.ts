import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncommingMsgComponent } from './incomming-msg.component';

describe('IncommingMsgComponent', () => {
  let component: IncommingMsgComponent;
  let fixture: ComponentFixture<IncommingMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncommingMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncommingMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
