import chai, { assert, expect } from 'chai';
import { spy, stub, mock } from 'sinon';
import dirtyChai from 'dirty-chai';
import sinonChai from 'sinon-chai';
import jsdom from 'jsdom-global';

jsdom();

chai.use(dirtyChai);
chai.use(sinonChai);

global.assert = assert;
global.expect = expect;
global.spy = spy;
global.stub = stub;
global.mock = mock;

/**
 * @see http://ricostacruz.com/cheatsheets/mocha.html // Test Suite, Case
 * @see http://ricostacruz.com/cheatsheets/chai.html // Assertion
 * @see http://ricostacruz.com/cheatsheets/sinon.html // Mocking
 * @see http://ricostacruz.com/cheatsheets/sinon-chai.html // Assertion with Mocking
 */
