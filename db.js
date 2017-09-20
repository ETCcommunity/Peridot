var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Device = new Schema(
{
    "number": {type: Number, index: {unique: true}},
    "deviceID": String,
    "deviceType": String,
    "ClassID": String,
    "dateSdded": String,
    "location": String,
    "connectionState": String,
    "contractAddress": String,
    "abi": String,
    "events": [
        {
            "Event": String,
            "format": Number,
            "TimeReceived": String,
          }
    ],
    "Sensor": [
      {
        "Event": String,
        "Datapoint": String,
        "Value": String,
        "DatTime": Number,
      }
    ]
});

mongoose.model('Device', Device);
module.exports.Device = mongoose.model('Device');

mongoose.connect( 'mongodb://localhost/peridotDB' );
mongoose.set('debug', true);
