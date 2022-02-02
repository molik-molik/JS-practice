
  var countDownDate = new Date("Jun 26, 2024 00:00:00").getTime();
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("tillEnd").innerHTML = days + "d " + hours + "h " +
      minutes + "m " + seconds + "s " + "-----> TILL THE END OF THE UNIVERSITY!!!";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("tillEnd").innerHTML = "IT ENDED!";
    }
  }, 1000);




  let text = "NAME os the student: Berikova Malika. GROUP: CS-2121N.";
  document.getElementById("demo").innerHTML = text;



  function multiplyBy() {
    num1 = document.getElementById("fn").value;
    num2 = document.getElementById("sn").value;
    document.getElementById("result").innerHTML = num1 * num2;
  }

  function divideBy() {
    num1 = document.getElementById("fn").value;
    num2 = document.getElementById("sn").value;
    document.getElementById("result").innerHTML = num1 / num2;
  }



  const d = new Date();
  document.getElementById("demom").innerHTML = d;
