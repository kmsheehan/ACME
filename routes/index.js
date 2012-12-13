/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', {
        locals: {
            title: 'ACME'
        }
    });

};

exports.partials = function (req, res) {
    var name = req.params.name;
    console.log('VIEW: ' + name);
    res.render('partials/' + name);
    //res.render( name);

};

