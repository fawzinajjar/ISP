module.exports = function ValidateIPaddress(inputText) {
    var ipformat =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (inputText.match(ipformat)) {
      console.log("You have entered an valid IP address!");
      return true;
    } else {
      console.log("You have entered an invalid IP address!");
      return false;
    }
  }