export abstract class Helpers {

  public static generateRandomString() {
    var text = "autotest";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

  public static generateRandomStringSignatures() {
    var text = "autotest";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
    for (var i = 0; i < 8; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

  public static generateRandomStringLegalEntity() {
    var text = "autotest";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
    for (var i = 0; i < 3; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
  public static generateRandomNumberNewModelFrom(min: 1, max: 31) {
    var number = "";

    number += Math.floor(Math.random() * (max - min + 1) + min);

    return number;
  }

  public static generateRandomNumberNewModelTo(min: 60, max: 100) {
    var number = "";

    number += Math.floor(Math.random() * (max - min + 1) + min);

    return number;
  }

  public static generateRandomNumberNewTermWeight(min: 31, max: 60) {
    var number = "";

    number += Math.floor(Math.random() * (max - min + 1) + min);

    return number;
  }

  public static generateRandomNumberNewTermPoints() {
    var number = "";
    var possible = [ -0.5, -1, -1.5, -2, -2.5, -3, -3.5, -4, -4.5, -5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 ];
  
   number += possible[Math.floor(Math.random() * possible.length)];
  
    return number;
  }

  public static currentDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return month + '/' + day + '/' + year;
  }

  public static currentDateLastUpdate() {
    var date = new Date().toLocaleDateString('en-US', {year:'2-digit', month:'2-digit', day:'2-digit'});
    return date;
  }

  public static currentDateDashboard() {
    var date = new Date();
    var year = date.getFullYear().toString().substr(-2);
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return month + '/' + day + '/' + year;
  }

  public static currentDateDashboardPlus1Month() {
    var date = new Date();
    var year = date.getFullYear().toString().substr(-2);
    var month = (1 + date.getMonth()+1).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return month + '/' + day + '/' + year;
  }

  public static currentDateDashboardPlus2Month() {
    var date = new Date();
    var year = date.getFullYear().toString().substr(-2);
    var month = (1 + date.getMonth()+2).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return month + '/' + day + '/' + year;
  }

  public static dateForDashboardDealHealthScore0() {
    var date = new Date();
    var year = date.getFullYear().toString().substr(-2);
    var year1 = (date.getFullYear() - 1).toString().substr(-2);
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    
    return '03' + '/' + '01' + '/' + year1 + ' - ' + month + '/' + '31' + '/' + year;
  }

  public static dateForDashboardDealHealthScore1() {
    var date = new Date();
    var year = date.getFullYear().toString().substr(-2);
    var year1 = (date.getFullYear() - 1).toString().substr(-2);
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    
    return '08' + '/' + '01' + '/' + year1 + ' - ' + month + '/' + '31' + '/' + year;
  }

  public static dateForDashboardDealHealthScore2() {
    var date = new Date();
    var year = date.getFullYear().toString().substr(-2);
    var year1 = (date.getFullYear() - 1).toString().substr(-2);
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    
    return '06' + '/' + '01' + '/' + year1 + ' - ' + month + '/' + '31' + '/' + year;
  }

  public static dateForDashboardDealHealthScore3() {
    var date = new Date();
    var year = date.getFullYear().toString().substr(-2);
    var year1 = (date.getFullYear() - 1).toString().substr(-2);
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    
    return '11' + '/' + '01' + '/' + year1 + ' - ' + month + '/' + '31' + '/' + year;
  }

  public static currentDatePlus2weeks() {
    var date = new Date(Date.now() + 12096e5);
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return month + '/' + day + '/' + year;
}

public static currentDateMinus1Day() {
  var date = new Date(Date.now() - 12096e4 );
  var year = date.getFullYear();
  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;
  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  
  return month + '/' + day + '/' + year;
}

public static currentDatePlus1Months() {
  var date = new Date();
  var year = date.getFullYear();
  var month = (1 + date.getMonth()+1).toString();
  month = month.length > 1 ? month : '0' + month;
  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  
  return month + '/' + day + '/' + year;
}

public static currentDatePlus2Months() {
  var date = new Date();
  var year = date.getFullYear();
  var month = (1 + date.getMonth()+2).toString();
  month = month.length > 1 ? month : '0' + month;
  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  
  return month + '/' + day + '/' + year;
}

public static currentDateFirstDayOfMonth() {
  var date = new Date();
  var firstDate = new Date(date.getFullYear(), date.getMonth(), 1).toLocaleString('en-US', {year: 'numeric', month:'2-digit', day:'2-digit'});  

  return firstDate;
}

public static currentDateLastDayOfMonth() {
  var date = new Date();
  var lastDate = new Date(new Date(date.getFullYear(), date.getMonth() + 1, 0)).toLocaleString('en-US', {year: 'numeric', month:'2-digit', day:'2-digit'});  

  return lastDate;
}

public static currentYear() {
  var date = new Date();
  var year = date.getFullYear().toString();

  return year;
}

public static currentMonth() {
  var month = new Date();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var date = months[month.getMonth().toString()];

  return date;
}

public static currentYearMinus1() {
  var date = new Date();
  var year = (date.getFullYear() - 1).toString();

  return year;
}

public static currentDateAndTime() {
  var today = new Date();
  var date = today.toLocaleDateString('en-US', {year:'2-digit', month:'2-digit', day:'2-digit'});
  var time = today.toLocaleTimeString('en-US', {timeZone: 'US/Mountain', hour: 'numeric', minute: '2-digit'}) + ' MT';

  var dateTime = date + ' at ' + time

  return dateTime;
}

public static currentDateForSignatures() {
  var today = new Date();
  var date = today.toLocaleDateString('en-US', {year:'2-digit', month:'2-digit', day:'2-digit'});

  return ' ' + date + ' ';
}

public static currentDateAndTimeForSignatures() {
  var today = new Date();
  var date = today.toLocaleDateString('en-US', {year:'2-digit', month:'2-digit', day:'2-digit'});
  var time = today.toLocaleTimeString('en-US', {timeZone: 'US/Mountain', hour: 'numeric', minute: '2-digit'}) + ' MT';

  var dateTime = ' ' + date + ' ' + time + ' '

  return dateTime;
}

public static currentDateAndTimeForSignedContract() {
  var today = new Date();
  var date = today.toLocaleDateString('en-US', {month:'short', year:'numeric', day:'2-digit'});
  var time = today.toLocaleTimeString('en-US', {timeZone: 'US/Mountain', hour: 'numeric', minute: '2-digit'});

  var dateTime = ' ' + date + ' ' + time + ' '

  return dateTime;
}


}

//Math.floor(Math.random() * (max - min + 1)) + min;

  //public static generateRandomNumberFrom() {
  //var number = "";
  //var possible = "012345";
  
   //for (var i = 0; i < 2; i++)
  //number += possible.charAt(Math.floor(Math.random() * possible.length));
  
  //return number;
  //}

  //public static generateRandomNumberTo() {
    //var number = "";
    //var possible = "06789";
    
     //for (var i = 0; i < 2; i++)
    //number += possible.charAt(Math.floor(Math.random() * possible.length));
    
    //return number;