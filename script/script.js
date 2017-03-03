var bell = document.getElementById('bell-audio');
function playBell() {
  bell.play();
  bl=1;
  // notifyMe();
  vibrate();
}
function pauseBell() {
  bell.pause();
  bl=0;

}
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);


    if (h===13 && m==58 && s==50){
        document.getElementById('lesson').innerHTML = "begin lesson 1";
        playBell();
    }
    if (h===14 && m===45 && s==0){
        document.getElementById('lesson').innerHTML = "GO TO BREAK";
        playBell();
    }
    if (h===15 && m==00 && s==00){
        document.getElementById('lesson').innerHTML = "begin lesson 2";
        playBell();
    }
    if (h===15 && m===45 && s==00){
        document.getElementById('lesson').innerHTML = "GO TO BREAK";
        playBell();
    }
    if (h===16 && m==00 && s==00){
        document.getElementById('lesson').innerHTML = "begin lesson 3";
        playBell();
    }
    if (h===16 && m===45 && s==00){
        document.getElementById('lesson').innerHTML = "GO TO BREAK";
        playBell();
    }
    if (h===17 && m==00 && s==00){
        document.getElementById('lesson').innerHTML = "begin lesson 4";
        playBell();
    }
    if (h===18 && m==00 && s==00){
        document.getElementById('lesson').innerHTML = "GO TO HOME";
        playBell();
    }
  }


function vibrate() {
  var zvonok = document.getElementById("bell");
  var btn = document.getElementsByClassName('lesson');
  var pos = 45;
  var rot = 20;
  var id = setInterval(frame, 150);
  function frame() {
    if (bl===0) {
      clearInterval(id);
    } else {
      pos=0-pos;
      rot=0-rot;
      zvonok.style.transform = 'skew('+pos+'deg)';
      zvonok.style.transformOrigin = "center top"
      zvonok.style.transform = 'rotate('+rot+'deg)';
    }
  }
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
        };  // add zero in front of numbers < 10
    return i;
}

////////////////////////////////////////////////////////
//                      notification                  //
////////////////////////////////////////////////////////

// // request permission on page load
// document.addEventListener('DOMContentLoaded', function () {
//   if (!Notification) {
//     alert('Desktop notifications not available in your browser. Try Chromium.');
//     return;
//   }
//
//   if (Notification.permission !== "granted")
//     Notification.requestPermission();
// });
//
// function notifyMe() {
//   //if (Notification.permission !== "granted")
// //    Notification.requestPermission();
// //  else {
//     var notification = new Notification('Notification title', {
//       icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
//       body: "Hey there! You've been notified!",
//     });
//
//     notification.onclick = function () {
//       window.open("http://stackoverflow.com/a/13328397/1269037");
//     };
//
//   }
