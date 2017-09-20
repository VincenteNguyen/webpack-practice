require('../css/styles.css');
let peoples = require('./people.js');
var $ = require('jquery');

$.each(peoples, function(index, value){
    $('body').append('<h1>'+ peoples[index].name +'</h1>');
});
console.log(peoples[0].name);