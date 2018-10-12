import 'mocha';

import { RootMiddlewaresUnitTest } from './middlewares/root.middlewares.test';
import { RootDatabaseUnitTest } from './database/root.database.test';
import { RootValidatorsTest } from './validators/root.validators.test';
import { RootLibUnitTest } from './lib/root.lib.test';


export function RootUnitTest() {
  describe('Unit Test', function() {
    RootDatabaseUnitTest();
    RootLibUnitTest();
    RootMiddlewaresUnitTest();
    RootValidatorsTest();
  });
}