import 'mocha';

import { AccountAPIValidatorsTest } from './account.api.validators.test';

export function RootValidatorsTest() {
  describe('Validators Tests', function() {
    AccountAPIValidatorsTest();
  });
}