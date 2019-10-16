const db = require('./conn');

db.query('select * from ceos').then(function(response){
    console.log('response from the database: ', response);
});