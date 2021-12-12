function bai1() {
    document.getElementById("lesson__1").style.display = "block";
    document.getElementById("lesson__2").style.display = "none";
    document.getElementById("lesson__3").style.display = "none";
    document.getElementById("lesson__4").style.display = "none";
    document.getElementById("lesson__5").style.display = "none";
    document.getElementById("lesson__6").style.display = "none";
    document.getElementById("lesson__7").style.display = "none";
}

// document.getElementById("btn_1").onclick = function() {
//     var soChan = "";
//     var soLe = "";
//     for(var i=0; i<100; i++) {
//         if(i%2==0) {
//             soChan += " " + i;
//         } else {
//             soLe += " " + i;
//         }
//     }
//     document.getElementById("txt__soChan").innerHTML = "Số chẵn:" + soChan;
//     document.getElementById("le_wrap").style.display = "block";
//     document.getElementById("txt__soLe").innerHTML ="Số lẻ:" + soLe;
// }

//while
document.getElementById("btn_1").onclick = function() {
    var n=0;
    var soChan = "";
    var soLe = "";
    while(n<100) {
        if(n%2==0) {
            soChan += " " + n;
        } else {
            soLe += " " + n;
        }
        n++;
    }
    document.getElementById("txt__soChan").innerHTML = "Số chẵn:" + soChan;
    document.getElementById("le_wrap").style.display = "block";
    document.getElementById("txt__soLe").innerHTML ="Số lẻ:" + soLe;
}