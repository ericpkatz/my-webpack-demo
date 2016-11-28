var camelize = require('camelize');

function Foo(config){
  this.firstName = config.firstName;
  this.lastName = config.lastName;
}

Foo.prototype.fullName = function(){
  return camelize(this.firstName + '_' + this.lastName);
};

export const defaultFirstName = 'Prof';

export default Foo;

