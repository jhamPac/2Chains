import { createBlock } from '../src/lib';

describe('Test lib functions', () => {
  it('should create a new block', () => {
    let block = createBlock(0, 0, Date.now(), { example: 'testing' }, 'newhashhereplease');
    expect(block).toBeTruthy();
  });
});
