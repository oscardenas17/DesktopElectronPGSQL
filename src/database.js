const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'yesid',
    database: 'pruebadtb'
    //port:
});


 function getConnection(){
     return pool;
 }


module.exports = {getConnection}
