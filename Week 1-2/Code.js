//week1-2 countdown timer 10-1 , Blastoff.
function startCountdown() {
    var count = 10;

    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;

    setTimeout(function () {
        //after 1 second it will run the code here
        //countdown should say 10 here
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 1000);
    //countdown 9
    setTimeout(function(){
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 2000);
    //countdown 8
    setTimeout(function(){
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 3000);
    //countdown 7
    setTimeout(function(){
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 4000);
    //countdown 6
    setTimeout(function(){
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 5000);
    //countdown 5
    setTimeout(function(){
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 6000);
    //countdown 4
    setTimeout(function(){
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 7000);
    //countdown 3
    setTimeout(function(){
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 8000);
    //countdown 2
    setTimeout(function(){
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 9000);
    //countdown finishing...
    setTimeout(function(){
        document.getElementById("countdownTimer").innerHTML = "Blastoff!";
    }, 10000);
}   //Countdown says "blastoff!""