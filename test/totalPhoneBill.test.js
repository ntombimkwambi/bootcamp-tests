describe('totalPhoneBill' , function(){
  it('should check the amount used for call' , function(){
      assert.equal(totalPhoneBill('call'), 'R2.75' );
  });
  it('should check the amount used for sms' , function(){
      assert.equal(totalPhoneBill('sms'), 'R0.65');
  });
  it('should check the total cost of calls and sms' , function(){
      assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45' );
  });
});
