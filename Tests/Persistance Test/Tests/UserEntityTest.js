var selectUser = require('../../../Persistance Layer/UserEntity');
var userTestData = require('../Test Data/UserTestData');
var express = require('express');
var testCase = express();
var bodyParser = require('body-parser');

testCase.use(bodyParser());

testCase.get('/select/user/test',function (req, res) {

    selectUser.selectAllUsers(function(err,results){
          if(err){
              throw err;
          }else{
              res.send(results);
          }
    });

});

testCase.get('/select/user/byId/test',function (res) {
    var idnum = userTestData.selectByUserIdData();

    selectUser.selectUserById(idnum,function (err,result) {
        if(err){
            throw err;
        }else{
            res.send(result);
            console.log(result);
        }
    });
});

testCase.get('/insert/user/test',function (req, res) {

    var data = userTestData.insertUser();

    selectUser.insertUser(data, function (err, result) {
        if(err){
           res.send(err);
        }else{
            res.send(result);
        }
    });
});

testCase.get('/update/user/test', function (req, res) {
    var data = userTestData.updateUser();

    selectUser.updateUser(data, function (err, result) {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }

    })

});






testCase.listen('7070',function () {
   console.log('Testing connected on port 7070');
});
