var mongoose = require( 'mongoose' );
var Block     = mongoose.model( 'Device' );
var filters = require('./filters')

//var Memcached = require('memcached');
//var memcached = new Memcached("localhost:11211");

module.exports = function(app){
  if (app.get('env') === 'development')
    var web3relay = require('./web3dummy');
  else
    var web3relay = require('./web3relay');


  app.post('/web3relay', web3relay.data);

}


var getDevice = function(req, res) {

  var txQuery = "number";
  var number = parseInt(req.body.block);

  var deviceFind = Device.findOne( { number : number }).lean(true);
  deviceFind.exec(function (err, doc) {
    if (err || !doc) {
      console.error("deviceFind error: " + err)
      console.error(req.body);
      res.write(JSON.stringify({"error": true}));
    } else {
      var device = filters.filterDevice([doc]);
      res.write(JSON.stringify(device[0]));
    }
    res.end();
  });

};

/*
  Fetch data from DB
*/
var getData = function(req, res){

  var action = req.body.action.toLowerCase();
  var limit = req.body.limit

  if (action in DATA_ACTIONS) {
    if (isNaN(limit))
      var lim = MAX_ENTRIES;
    else
      var lim = parseInt(limit);

    getLatest(lim, res, DATA_ACTIONS[action]);

  } else {

    console.error("Invalid Request: " + action)
    res.status(400).send();
  }

};

/*
  temporary blockstats here
*/
var latestDevice = function(req, res) {
  var device = Device.findOne({}, "deviceID")
                      .lean(true).sort('-number');
  device.exec(function (err, doc) {
    res.write(JSON.stringify(doc));
    res.end();
  });
}


var getLatest = function(lim, res, callback) {
  var blockFind = Block.find({}, "number transactions timestamp miner extraData")
                      .lean(true).sort('-number').limit(lim);
  blockFind.exec(function (err, docs) {
    callback(docs, res);
  });
}


const MAX_ENTRIES = 20;

const DATA_ACTIONS = {
}
