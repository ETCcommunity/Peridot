var BlockStat = require( '../db-stats.js' ).BlockStat;
var https = require('https');
var async = require('async');

var etherUnits = require(__lib + "etherUnits.js")

module.exports = function(req, res) {

  if (!("action" in req.body))
    res.status(400).send();


}
