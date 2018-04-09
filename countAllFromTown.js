function countAllFromTown(regNum, regStart)
{
  var fromTown = regNum.split(',');
  var countTown = [];
  for (var i = 0; i < fromTown.length; i++)
  {
    console.log(fromTown[i]);
    if(fromTown[i].trim().startsWith(regStart))
    {
      countTown.push(fromTown[i].trim())
    }
  }
    return countTown.length
}
