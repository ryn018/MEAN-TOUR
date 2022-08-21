import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripthrissurComponent } from './tripthrissur.component';

describe('TripthrissurComponent', () => {
  let component: TripthrissurComponent;
  let fixture: ComponentFixture<TripthrissurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripthrissurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripthrissurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
