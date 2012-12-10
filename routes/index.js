/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', {
        locals: {
            title: 'ACME'
        }
        /*
         var view = {items:['Mercury','Venus','Earth','Mars']};
         var template = "<ul> {{#items}}<li>{{i}} - {{.}}</li>{{/items}} </ul>";
         var html = Mustache.to_html(template,view);
         */
    });

};

exports.partials = function (req, res) {
    var name = req.params.name;
    console.log('VIEW: ' + name);
    res.render('partials/' + name);
    //res.render( name);

};

