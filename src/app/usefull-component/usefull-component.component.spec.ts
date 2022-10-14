import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefullComponentComponent } from './usefull-component.component';

describe('UsefullComponentComponent', () => {
  let component: UsefullComponentComponent;
  let fixture: ComponentFixture<UsefullComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsefullComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsefullComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
