
/*
 * GET table listing.
 */
var wine = require('../routes/wines.js');

exports.list = function(req, res){
    wine.findList( function(err, winelist){
        res.render('table', {
            title: 'Wine list',
            wines: winelist
        });
 //       console.log(winelist);
    });
};
