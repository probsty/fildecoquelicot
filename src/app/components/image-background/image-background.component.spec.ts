import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBackgroundComponent } from './image-background.component';

describe('ImageBackgroundComponent', () => {
  let component: ImageBackgroundComponent;
  let fixture: ComponentFixture<ImageBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
