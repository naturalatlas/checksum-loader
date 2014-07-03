var crypto = require('crypto');

module.exports = function(source) {
	this.cacheable && this.cacheable();
	var hash = crypto.createHash('md5').update(source).digest('hex');
	return "module.exports = '" + hash + "';";
};