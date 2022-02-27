const lodash = require('lodash');

const item=[1,[2,[3,[4]]]]

const newitem=lodash.flattenDeep(item);
console.log(newitem);