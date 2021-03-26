var x = setInterval(timer, 1000);
var playsong = false;
let track = document.createElement("audio");
var chk = false;

track.loop = true;
function timer() {
    var d = new Date();
    ct.innerHTML = d.toLocaleTimeString();

    if (track.currentTime > 0 && playsong == true) {
        sd.style.display = 'block';
    }
    if (playsong && ct.innerHTML == sub.value) {
        track.currentTime = 0;
        track.play();
    }
    if (track.ended) track.currentTime = 0;
    if (playsong == false) track.pause();
}

function playalarm() {
    var y = event.preventDefault();
    if (playsong) {
        check();
        if (chk || track.currentTime == 0) {
            q1.value = '';
            q2.value = '';
            q3.value = '';
            aa.innerHTML = '';
            ab.innerHTML = '';
            ac.innerHTML = '';
            sd.style.display = 'none';
            playsong = false;
            play.innerHTML = "Set Alarm";
            snz.style.backgroundColor = "rgb(0, 255, 255)";
        }
        else alert("Wrong answer");
    }
    else if (sub.value != '') {
        track.src = songs.value;
        playsong = true;
        rndm();
        chk = false;
        play.innerHTML = "Stop Alarm";
    }

}

function snooze() {
    var z = event.preventDefault();
    if (snz.style.backgroundColor == "rgb(0, 255, 255)" && play.innerHTML == "Stop Alarm" && sub.value != '') {
        snz.style.backgroundColor = "rgb(15, 96, 201)";
        track.pause();
        setTimeout(p, 1000 * snoozee.value);
    }
    else snz.style.backgroundColor = "rgb(0, 255, 255)";
}

function p() {
    if (play.innerHTML == "Stop Alarm") {
        track.currentTime = 0;
        track.play();
    }

}

function check() {
    if (eval(q1.value) == eval(aa.innerHTML) && eval(q2.value) == eval(ab.innerHTML) && eval(q3.value) == eval(ac.innerHTML)) chk = true;
}

function rndm() {
    if (level.value == 1) {
        aa.innerHTML += Math.floor((Math.random()+0.06) * 100); aa.innerHTML += '+'; aa.innerHTML += Math.floor((Math.random()+0.06) * 100);
        ab.innerHTML += Math.floor((Math.random()+0.06) * 100); ab.innerHTML += '+'; ab.innerHTML += Math.floor((Math.random()+0.06) * 100);
        ac.innerHTML += Math.floor((Math.random()+0.06) * 100); ac.innerHTML += '+'; ac.innerHTML += Math.floor((Math.random()+0.06) * 100);
    }
    else if (level.value == 2) {
        aa.innerHTML += Math.floor((Math.random()+0.06) * 1000); aa.innerHTML += '+'; aa.innerHTML += Math.floor((Math.random()+0.06) * 1000);
        ab.innerHTML += Math.floor((Math.random()+0.06) * 1000); ab.innerHTML += '+'; ab.innerHTML += Math.floor((Math.random()+0.06) * 1000);
        ac.innerHTML += Math.floor((Math.random()+0.06) * 100); ac.innerHTML += '*'; ac.innerHTML += Math.floor((Math.random()+0.06) * 100);
    }
    else {
        aa.innerHTML += Math.floor((Math.random() + 0.06) * 100); aa.innerHTML += '*'; aa.innerHTML += Math.floor((Math.random() + 0.06) * 100);
        ab.innerHTML += Math.floor(Math.random() + 0.06 * 100); ab.innerHTML += '*'; ab.innerHTML += Math.floor((Math.random() + 0.06) * 100);
        ac.innerHTML += Math.floor((Math.random() + 0.06) * 100); ac.innerHTML += '*'; ac.innerHTML += Math.floor((Math.random() + 0.06) * 100);
    }
}