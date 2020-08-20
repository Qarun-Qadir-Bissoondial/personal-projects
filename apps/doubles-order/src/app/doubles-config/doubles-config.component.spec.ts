import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublesConfigComponent } from './doubles-config.component';

describe('DoublesConfigComponent', () => {
  let component: DoublesConfigComponent;
  let fixture: ComponentFixture<DoublesConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoublesConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoublesConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
