function myFunction(event) {
    document.getElementById("accordionExample").style.display = "block";
    document.getElementById("Mycollapse").style.display = "none";
    var x = document.getElementById("playerone").value;
    document.getElementById("teamone").innerHTML = x;
    var x = document.getElementById("playertwo").value;
    document.getElementById("teamtwo").innerHTML = x;
    var x = document.getElementById("playerthree").value;
    document.getElementById("teamthree").innerHTML = x;
    var x = document.getElementById("playerfour").value;
    document.getElementById("teamfour").innerHTML = x;
    event.preventDefault();
}


