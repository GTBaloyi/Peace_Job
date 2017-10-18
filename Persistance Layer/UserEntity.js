var db = require('./dbconnect');
var dbcon = db.dbcon;


exports.selectAllUsers = function(callback){

    dbcon.query('select * from user', function Query(err, results) {
        if(err){
            console(err);
        }else{
            callback(err, results);
        }
    });
};

exports.selectUserById = function (idnum,callback) {
    dbcon.query('select * from user where id_number = "'+idnum +'"', function (err, result) {
        if(err){
            throw err;
        }else {
            callback(err, result[0]);
        }
    });
};

exports.insertUser = function(data, callback){
    dbcon.query('insert into user set ?', data, function (err) {
        if(err){
            callback(err);
        }
        else {
            callback({success: true});
        }

    });
};

exports.updateUser = function(data, callback){
    dbcon.query('Update user set password ="'+data.password+'", account_active ="'+data.account_active+'" where id_number ="'+data.id_number+'"', function (err) {
        if(err){
            callback(err);
        }else{
            callback({success: true});
        }
    });
};

