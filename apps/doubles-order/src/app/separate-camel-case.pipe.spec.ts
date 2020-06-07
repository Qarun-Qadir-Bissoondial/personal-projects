import { SeparateCamelCasePipe } from './separate-camel-case.pipe';

describe('SeparateCamelCasePipe', () => {
  it('create an instance', () => {
    const pipe = new SeparateCamelCasePipe();
    expect(pipe).toBeTruthy();
  });
});
