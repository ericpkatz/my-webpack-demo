var camelize = require('camelize');
function Bar(config){
  this.firstName = config.firstName;
  this.lastName = config.lastName;
}

Bar.prototype.fullName = function(){
  return camelize(this.firstName + '_' + this.lastName + '_' + this.lastName);
};

module.exports = Bar;
