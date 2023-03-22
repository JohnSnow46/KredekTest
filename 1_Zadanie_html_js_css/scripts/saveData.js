function saveData() {
  var cookies = document.cookie;
  var cookiesArray = cookies.split("; ");
  var cookiesObject = {};

  for (var i = 0; i < cookiesArray.length; i++) {
    var cookie = cookiesArray[i].split("=");
    cookiesObject[cookie[0]] = cookie[1];
  }

  var name = document.getElementById("name").value;
  var comment = document.getElementById("comment").value;
  var expiry = new Date();
  expiry.setTime(expiry.getTime() + (30 * 24 * 60 * 60 * 1000)); // ustawia ciasteczko na 30 dni

  cookiesObject["name"] = name;
  cookiesObject["comment"] = comment;

  document.cookie = "name=" + name + "; expires=" + expiry.toUTCString();
  document.cookie = "comment=" + comment + "; expires=" + expiry.toUTCString();

  var table = document.getElementById("commentsTable");
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

var name = getCookie("name");
var comment = getCookie("comment");
if (name && comment) {
  var row = "<tr><td>" + name + "</td><td>" + comment + "</td></tr>";
  document.querySelector("table").innerHTML += row;
} else {
  alert("Nie znaleziono zapisanych danych!");
}
