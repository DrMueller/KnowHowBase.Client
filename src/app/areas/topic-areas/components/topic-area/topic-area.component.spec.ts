import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicAreaComponent } from './topic-area.component';

describe('TopicAreaComponent', () => {
  let component: TopicAreaComponent;
  let fixture: ComponentFixture<TopicAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
