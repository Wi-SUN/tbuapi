'use strict';

exports.ipAddressesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ "FF02::1" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.phyPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (PhyConfig)
  **/
    var examples = {};
  examples['application/json'] = {
  "code" : 123,
  "message" : "everything is ok"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.runModeModePUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * mode (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "code" : 123,
  "message" : "everything is ok"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

