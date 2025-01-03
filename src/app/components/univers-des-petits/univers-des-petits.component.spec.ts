import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversDesPetitsComponent } from './univers-des-petits.component';

describe('UniversDesPetitsComponent', () => {
  let component: UniversDesPetitsComponent;
  let fixture: ComponentFixture<UniversDesPetitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniversDesPetitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversDesPetitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
