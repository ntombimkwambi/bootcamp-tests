describe('regCheck' , function(){
  it('should return false' , function(){
      assert.equal(regCheck('DV 23 LP GP', 'MP'), false);
  });
  it('should return true' , function(){
      assert.equal(regCheck('DV 23 NB GP', 'GP'),true );
  });
});
