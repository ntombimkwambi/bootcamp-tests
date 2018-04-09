describe('countAllPaarl' , function(){
  it('should check if registration number is for Paarl' , function(){
      assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'), 3);
  });

  it('should check if registration number is for Paarl' , function(){
      assert.equal(countAllPaarl('Ck 345 123, Ck 2345, CL 123-546, CK 345, Ck 123'), 0);
  });
});
