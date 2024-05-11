function updateLock(){
var now = new Date();
var hour = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();

hour = hour < 10 ? "0" + hour : hour;
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

var timeString = hour + ":" + minutes + ":" + seconds ":";
document.getElementById("clock").innerHTML = timeString;
}
setInterval(updateLock,1000);
updateLock();