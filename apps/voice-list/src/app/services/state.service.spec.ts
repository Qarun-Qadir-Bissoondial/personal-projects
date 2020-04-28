import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';

fdescribe('StateService', () => {
  let service: StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateService);
    service.store.next({});
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save state', () => {
    service.update('test', {key: 'value'});
    expect(service.store.value['test']).toEqual({key: 'value'});
  });

  it('should load state', () => {
    service.update('test', { key: 'value' });
    service.fetch('test').subscribe(
      data => { expect(data).toEqual({key: 'value'}) }),
      error => { fail('No errors should be present') },
      () => { console.log('Test completed');
    };
  });

  it('should emit changed state', () => {
    let value: object;

    service.update('test', { key: 'value' });
    service.fetch('test').subscribe(
      data => { value = data; },
      error => { fail('No errors should be present') },
      () => { console.log('Test complete'); }
    );

    service.update('test', { key: 'value2' });

    expect(value).toEqual({key: 'value2'});
  });
});
