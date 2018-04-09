describe('isWeekday' , function(){
  it('should return true if day is a weekday' , function(){
      assert.equal(isWeekday('tuesday'), true);
  });
  it('should return true if day is a  weekday' , function(){
      assert.equal(isWeekday('monday'),true );
  });
});
