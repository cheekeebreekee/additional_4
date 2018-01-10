module.exports = function multiply(firstNumber, secondNumber) {
  var arr = [];
  var helpArr = [];
  var secondMul = null;
  var firstMul = null;
  var sum = "";
	for(var i = secondNumber.length-1; i >= 0; i--) {
  	secondMul = parseInt(secondNumber.charAt(i));
  	for (var j = firstNumber.length-1; j >= 0; j--) {
    	firstMul = parseInt(firstNumber.charAt(j));
      helpArr.push((secondMul * firstMul).toString());
    }
    for (var k = 0; k < helpArr.length; k++) {
    	if (sum === "") sum = helpArr[k];
      else {
      	var len = sum.length;
    		sum = (parseInt((len - k) !== 0 ? sum.substring(0, len - k) : '0') + parseInt(helpArr[k])).toString() + sum.substring(len-k, len);
    	}
    }
    helpArr = [];
    arr.push(sum);
    sum = "";
  }
  for (i = 0; i < arr.length; i++) {
    	var tempSum = "";
    	if (sum === "") sum = arr[i];
    	else {
      	var number = arr[i];
      	var nextDigit = 0;
      	for (j = 0; j < number.length; j++) {
        	if (sum.charAt(sum.length-1-i-j) === '') {
          	tempSum = (parseInt(number.substring(0,number.length-j)) + nextDigit).toString() + tempSum;
          	break;
        	}
        	else {
          	tempSum = ((parseInt(sum.charAt(sum.length-1-i-j)) + parseInt(number.charAt(number.length-1-j)) + nextDigit) % 10).toString() + tempSum;
          	nextDigit = parseInt((parseInt(sum.charAt(sum.length-1-i-j)) + parseInt(number.charAt(number.length-1-j)) + nextDigit) / 10);
        	}
      	}
        if (sum.charAt(sum.length-1-i-j) === '' && number.charAt(number.length-1-j) === '' && nextDigit == 1) {
          tempSum = "1" + tempSum;
        }
      	sum = tempSum + sum.substring(sum.length - i, sum.length);
    	}
    }
    return sum;
}