import { add } from './add.js';
import { expect } from 'chai';

describe('add function', () => {
    it('adds two positive numbers correctly', () => {
      expect(add(2, 3)).to.equal(5);
    });
  
    it('adds two negative numbers correctly', () => {
      expect(add(-2, -3)).to.equal(-5);
    });
});
