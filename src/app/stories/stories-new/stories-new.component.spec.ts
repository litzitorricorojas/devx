import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesNewComponent } from './stories-new.component';

describe('StoriesNewComponent', () => {
  let component: StoriesNewComponent;
  let fixture: ComponentFixture<StoriesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
