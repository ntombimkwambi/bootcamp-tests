describe('transportFee' , function(){
  it('should check the amount for morning shift' , function(){
      assert.equal(transportFee('morning'), 'R20' );
  });
  it('should check the amount for afternoon shift' , function(){
      assert.equal(transportFee('afternoon'), 'R10');
  });
  it('should check the amount for night shift' , function(){
      assert.equal(transportFee('night'),'free' );
  });
});
