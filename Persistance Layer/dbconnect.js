var mysql = require('mysql');


exports.dbcon = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'peace_job',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

/*exports.mysqlConnection = function () {
    try{
        dbcon.connect();
        console.log('connected succesfully');
    }
    catch (ex){
        console.log('not connected');
    }
}*/