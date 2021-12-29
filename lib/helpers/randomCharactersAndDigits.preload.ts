export abstract class Helpers {

  public static generateRandomString() {
    var text = "autotest";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

  public static generateRandomNumber() {
    var number = Math.ceil(Math.random() * 100);

    return number;
  }
  
  }

//Math.floor(Math.random() * (max - min + 1)) + min;