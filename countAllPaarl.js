function countAllPaarl(regNumbers){
  var reg = [];
  var regList = regNumbers.split(", ")

  for(var i = 0; i < regList.length; i++){
    if(regList[i].startsWith("CJ")){
    	reg.push(regList[i]);
    }
  }
    return reg.length;
}
