'use strict';

exports.calculate = function(req, res) {
  req.app.use(function(err, _req, res, next) {
    if (res.headersSent) {
      return next(err);
    }

    res.status(400);
    res.json({ error: err.message });
  });

  // TODO: Add operator
var operations = {
  add:      (a, b) => Number(a) + Number(b),
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide:   (a, b) => a / b,
  power:    (a, b) => Math.pow(Number(a), Number(b)),
  '^':      (a, b) => Math.pow(Number(a), Number(b))
};


  if (!req.query.operation) {
    throw new Error("Unspecified operation");
  }

  var operation = operations[req.query.operation];

  if (!operation) {
    throw new Error("Invalid operation: " + req.query.operation);
  }

  if (!req.query.operand1 ||
      !req.query.operand1.match(/^(-)?[0-9\.]+(e(-)?[0-9]+)?$/) ||
      req.query.operand1.replace(/[-0-9e]/g, '').length > 1) {
    throw new Error("Invalid operand1: " + req.query.operand1);
  }

  if (!req.query.operand2 ||
      !req.query.operand2.match(/^(-)?[0-9\.]+(e(-)?[0-9]+)?$/) ||
      req.query.operand2.replace(/[-0-9e]/g, '').length > 1) {
    throw new Error("Invalid operand2: " + req.query.operand2);
  }

  res.json({ result: operation(req.query.operand1, req.query.operand2) });
};
