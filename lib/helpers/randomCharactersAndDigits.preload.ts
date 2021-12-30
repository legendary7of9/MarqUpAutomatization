export abstract class Helpers {

  public static generateRandomString() {
    var text = "autotest";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
  public static generateRandomNumberNewDealFrom(min: 1, max: 31) {
    var number = "";

    number += Math.floor(Math.random() * (max - min + 1) + min);

    return number;
  }

  public static generateRandomNumberNewDealTo(min: 60, max: 100) {
    var number = "";

    number += Math.floor(Math.random() * (max - min + 1) + min);

    return number;
  }

  public static generateRandomNumberNewTermWeight(min: 31, max: 60) {
    var number = "";

    number += Math.floor(Math.random() * (max - min + 1) + min);

    return number;
  }

  public static generateRandomNumberNewTermPoints(min: -5, max: 5) {
    var number = "";

    number += Math.floor(Math.random() * (max - min + 1) + min);

    return number;
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
    //}