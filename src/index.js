const elasticlunr = require('./elasticlunr.js');
require('./lunr.stemmer.support.js')(elasticlunr);
require('./lunr.jp.js')(elasticlunr);
module.exports = elasticlunr;