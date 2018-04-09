function totalPhoneBill(bills)
{

  var calls = [];
  var sms = [];
  var cost = bills.split(',');
 console.log(cost)
  for(var k = 0;k < cost.length;k++)

  {
    if(cost[k].trim() === 'call')
    {
      calls.push(cost[k]);
    }
    else if(cost[k].trim() === 'sms')
    {
      sms.push(cost[k]);
    }
  }
  var callTotal = calls.length *2.75;
  var smsTotal = sms.length *0.65;
  var calling = callTotal + smsTotal;

  return'R' + calling.toFixed(2);
}
