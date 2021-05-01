//Kotak Bolong Tengah ? 5

console.log("Kotak");
console.log();
var s = "";
var p = 5;
var l = 5;

for (i = 1; i <= l; i++) {
  if (i == 1 || i == l) {
    for (var j = 1; j <= p; j++) {
      s += "?";
    }
  } else {
    for (var k = 1; k <= p; k++) {
      if (k == 1 || k == p) {
        s += "?";
      } else {
        s += " ";
      }
    }
  }

  s += "\n";
}
console.log(s);

//Segitiga * 5
console.log("Segitiga");
console.log("");
var m = "";
var n = 5;
for (var i = 1; i <= n; i++) {
  for (var j = n; j >= i; j--) {
    m += " ";
  }
  for (var k = 1; k <= i + (i - 1); k++) {
    m += "*";
  }
    m += "\n";
}
console.log(m);