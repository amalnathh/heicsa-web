import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationBlocksComponent } from './notification-blocks.component';

describe('NotificationBlocksComponent', () => {
  let component: NotificationBlocksComponent;
  let fixture: ComponentFixture<NotificationBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
