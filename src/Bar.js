var camelize = require('camelize');


class Bar{
  constructor(config){
    this.firstName = config.firstName;
    this.lastName = config.lastName;
  }

  fullName(){
    return camelize(this.firstName + '_' + this.lastName + '_' + this.lastName);
  }
}

module.exports = Bar;
