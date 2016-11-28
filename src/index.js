import Foo, { defaultFirstName } from './models/Foo'; 
var Bar = require('./Bar');

var foo = new Foo({ firstName: defaultFirstName, lastName: 'buzz' });
console.log(foo.fullName());

var bar = new Bar({ firstName: 'fizz', lastName: 'buzz' });
console.log(bar.fullName());
