'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.succeed = succeed;

var _nock = require('nock');

var _nock2 = _interopRequireDefault(_nock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Mock a POST request to delete a user.
 */

function mock(_ref) {
  var _ref$request = _ref.request;
  let request = _ref$request === undefined ? {} : _ref$request;
  var _ref$response = _ref.response;
  let response = _ref$response === undefined ? {} : _ref$response;

  return (0, _nock2.default)(/\.authy\.com/).filteringPath(path => path.replace(/\/[0-9]+\//, '/{authyId}/')).post('/protected/json/users/{authyId}/delete', request.body).reply(response.code, response.body);
}

/**
 * Export a request that will `succeed`.
 */

/**
 * Module dependencies.
 */

function succeed() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  let request = _ref2.request;

  return mock({
    request: request,
    response: {
      body: {
        message: 'User was added to remove.',
        success: true
      },
      code: 200
    }
  });
}