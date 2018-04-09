describe('isFromBellville' , function(){
  it('should return false' , function(){
      assert.equal(isFromBellville('CL'), false);
  });
  it('should return true' , function(){
      assert.equal(isFromBellville('CY'), true );
  });
});
