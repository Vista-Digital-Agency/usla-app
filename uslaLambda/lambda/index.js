var aws = require('aws-sdk');
var MongoClient = require('mongodb').MongoClient;
var xml2js = require(xml2js);

var ses = new aws.SES({
   region: 'us-east-1'
});

exports.handler = (event, context, callback) => {

};
