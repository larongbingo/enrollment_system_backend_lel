import sinonChai from 'sinon-chai';
import { use } from 'chai';
import 'mocha';

import { RootUnitTest } from './unit.tests/root.unit.test';

use(sinonChai);

describe('Backend Tests', function() {
  RootUnitTest();
});