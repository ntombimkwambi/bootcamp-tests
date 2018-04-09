describe('countAllFromTown' , function(){
  it('should check if registration number is for the town' , function(){
      assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL'), 3);
  });

  it('should check if registration number is for the town' , function(){
      assert.equal(countAllFromTown('Ck 345 123, Ck 2345, CL 123-546, CK 345, Ck 123', 'ZN'), 0);
  });
});
