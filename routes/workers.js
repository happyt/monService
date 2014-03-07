
/*
 * GET table listing.
 */
var worker = require('../routes/employees.js');

exports.list = function(req, res){
    employee.findList( function(err, workerlist){
        res.render('worker', {
            title: 'Employee list',
            wines: workerlist
        });
        //       console.log(workerlist);
    });
};
