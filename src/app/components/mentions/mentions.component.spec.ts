import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionsComponent } from './mentions.component';

describe('MentionsComponent', () => {
  let component: MentionsComponent;
  let fixture: ComponentFixture<MentionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
