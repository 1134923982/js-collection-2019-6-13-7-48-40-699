'use strict';

function choose_multiples_of_three(collection) {
  collection = collection.filter(item=>{
    return item%3==0;
  })
  return collection;
  //implement here
}

module.exports = choose_multiples_of_three;
