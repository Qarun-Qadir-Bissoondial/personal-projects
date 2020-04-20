import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SingleListComponent } from './single-list.component';
import { generateFakeList } from 'src/testing/fake-gen';
import { Router } from '@angular/router';

class RouterWithExtras {
  getCurrentNavigation() {
    return {
      extras: {
        state: generateFakeList('Grocery List')
      }
    }
  }
}

describe('SingleListComponent', () => {
  let component: SingleListComponent;
  let fixture: ComponentFixture<SingleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleListComponent ],
      imports: [RouterTestingModule],
      providers: [
        { provide: Router, useClass: RouterWithExtras }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
