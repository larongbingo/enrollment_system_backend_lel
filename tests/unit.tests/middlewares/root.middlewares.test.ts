import 'mocha';

import { Create404Test } from './create.404.test';
import { ErrorHandlerTest } from './error.handler.test';

export function RootMiddlewaresUnitTest() {
  describe('Middlewares Test', function() {
    Create404Test();
    ErrorHandlerTest();
  });
}