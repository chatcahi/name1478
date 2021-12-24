var mysql = require('mysql');

var con = mysql.createConnection({
  host: "172.19.128.1",
  user: "name",
  password: "1234",
  database: 'name147'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

getDomain();

function getDomain() {
    return dbQuery('SELECT * FROM users;');
}

// * Important promise function
function dbQuery(databaseQuery) {
    return new Promise(data => {
        con.query(databaseQuery, function (error, result) { // change db->connection for your code
            if (error) {
                console.log(error);
                throw error;
            }
            try {
                console.log(result);
            } catch (error) {
                throw error;
            }

        });
    });

}

    