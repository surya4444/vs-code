function letscal(){
    let noPerson = document.getElementById('adult').value;
    let fromdate = document.getElementById('fromdate').value;
    let todate = document.getElementById('todate').value;

    document.getElementById('todate').min = fromdate;
    
    var perDay = 1000;
    var hoursInOneDay = 24;
    var secondsInOneHour = 3600;
    var milliSecondsInOneSecond = 1000;

    var fromDate = new Date(fromdate);
    var toDate = new Date(todate);

    var timeDifference = toDate.getTime() - fromDate.getTime();

    var days = timeDifference / (milliSecondsInOneSecond * secondsInOneHour * hoursInOneDay);

    var mul = noPerson*days*perDay;

    document.getElementById('price').value = mul;

}
