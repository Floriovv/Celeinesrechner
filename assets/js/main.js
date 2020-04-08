let date1 = new Date("04/15/2016")
let date2 = new Date()
document.getElementById("feuerwerk1").style.display = "none"
document.getElementById("feuerwerk2").style.display = "none"

function love(){
  var Difference_In_Time = date2.getTime() - date1.getTime(); 
  var x = Difference_In_Time / (1000 * 3600 * 24);
  document.getElementById("ergebnis").innerHTML = "Wir sind schon "+ ~~x +" Tage zusammen <3";
  document.getElementById("butt").style.backgroundColor = "red"
  document.getElementById("feuerwerk1").style.display = "inline"
  document.getElementById("feuerwerk2").style.display = "inline"
}
