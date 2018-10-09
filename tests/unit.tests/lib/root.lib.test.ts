import 'mocha';

import { ResponsesTest } from './responses.test';
import { RequestErrorHandlerCreatorTest } from './request.error.handler.test';

export function RootLibUnitTest() {
  describe('Lib Tests', function() {
    ResponsesTest();
    RequestErrorHandlerCreatorTest();
  });
}