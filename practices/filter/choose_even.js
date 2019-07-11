'use strict';

function choose_even(collection) {

   collection = collection.filter(item=> item%2==0)
  return collection;
}
module.exports = choose_even;
