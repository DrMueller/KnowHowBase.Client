import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeDocumentComponent } from './knowledge-document.component';

describe('KnowledgeDocumentComponent', () => {
  let component: KnowledgeDocumentComponent;
  let fixture: ComponentFixture<KnowledgeDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
