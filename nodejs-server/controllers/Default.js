'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.dodagRoutesGET = function dodagRoutesGET (req, res, next) {
  Default.dodagRoutesGET(req.swagger.params, res, next);
};

module.exports.ipAddressesGET = function ipAddressesGET (req, res, next) {
  Default.ipAddressesGET(req.swagger.params, res, next);
};

module.exports.phyPUT = function phyPUT (req, res, next) {
  Default.phyPUT(req.swagger.params, res, next);
};

module.exports.runModeModePUT = function runModeModePUT (req, res, next) {
  Default.runModeModePUT(req.swagger.params, res, next);
};

module.exports.securityKeysGET = function securityKeysGET (req, res, next) {
  Default.securityKeysGET(req.swagger.params, res, next);
};
