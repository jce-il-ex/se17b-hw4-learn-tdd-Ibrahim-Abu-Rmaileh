var assert = require("assert"); // core module
var C = require('../cash.js');  // our module

describe('Cash Register', function(){
  describe('Module C', function(){
    // at this point we start to check various possibilities one by one (for sure this way isnt effectibve but its naeve)
    // this is the first check for specific sum that written down there (300-210=90=50+20+20)
    it('getChange(210,300) should equal [50,20,20]', function(){
    assert.deepEqual(C.getChange(210,300), [50,20,20]);
})     
// same same
    it('should have a getChange Method', function(){
      assert.equal(typeof C, 'object');
      assert.equal(typeof C.getChange, 'function');
    })
    //same same 
    it('getChange(486,1000) should equal [500, 10, 2, 2]', function(){
    assert.deepEqual(C.getChange(486,1000), [500, 10, 2, 2]);
})
//same same 
it('getChange(1487,10000) should equal [5000, 2000, 1000, 500, 10, 2, 1 ]', function(){
    assert.deepEqual(C.getChange(1487,10000), [5000, 2000, 1000, 500, 10, 2, 1 ]);
});
  })
});  