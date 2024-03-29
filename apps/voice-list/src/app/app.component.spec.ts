import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ANGULAR_MATERIAL_IMPORTS } from '../../../../global_testing/angular_material';
import { ANGULAR_IMPORTS } from '../../../../global_testing/angular';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        ANGULAR_MATERIAL_IMPORTS,
        ANGULAR_IMPORTS
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'voice-list'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('voice-list');
  });

});
