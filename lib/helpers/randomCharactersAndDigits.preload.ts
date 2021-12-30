export abstract class Helpers {

  public static generateRandomString() {
    var text = "autotest";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

  public static generateRandomNumberFrom() {
  var number = "";
  var possible = "012345";
  
   for (var i = 0; i < 2; i++)
  number += possible.charAt(Math.floor(Math.random() * possible.length));
  
  return number;
  }

  public static generateRandomNumberTo() {
    var number = "";
    var possible = "06789";
    
     for (var i = 0; i < 2; i++)
    number += possible.charAt(Math.floor(Math.random() * possible.length));
    
    return number;
    }

  //public static generateRandomNumber() {
    //var number = "";
    //var possible = "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20";

    //for (var i = 0; i < 3; i++)
    //number += possible.charAt(Math.ceil(Math.random() * 100));

    //return number;
  //}
  
  }

//Math.floor(Math.random() * (max - min + 1)) + min;

