import { expect } from 'chai';
import assert from 'node:assert';
import { describe, it } from 'mocha';

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);

      // using chai expects:
      expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });
  });
});
