document.getElementById("d1").innerHTML = new Date().getFullYear()
document.getElementById("d2").innerHTML = new Date().toLocaleString()

var j = 0;
function change1() {
  var doc = document.getElementById("d1");
  var color = ["aliceblue", "blue", "brown", "green"];
  doc.style.backgroundColor = color[j];
  j = (j + 1) % color.length;
}
setInterval(change1, 3000);

var i = 0;
function change() {
  var doc = document.getElementById("d2");
  var color = ["aliceblue", "blue", "brown", "green"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1000);
