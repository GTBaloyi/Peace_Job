var personEntity = require('../../../Persistance Layer/PersonalInfoEntity');
var express = require('express');
var testCase = new express();
var bodyParser = require('body-parser');

testCase.use(bodyParser());

testCase.get('/select/person/test', function (req, res) {
    personEntity.selectPersonInfo(function (err, result) {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
});