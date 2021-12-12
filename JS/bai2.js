function bai2() {
    document.getElementById("lesson__1").style.display = "none";
    document.getElementById("lesson__2").style.display = "block";
    document.getElementById("lesson__3").style.display = "none";
    document.getElementById("lesson__4").style.display = "none";
    document.getElementById("lesson__5").style.display = "none";
    document.getElementById("lesson__6").style.display = "none";
    document.getElementById("lesson__7").style.display = "none";
}

// document.getElementById("btn_2").onclick = function() {
//     var count = 0;
//     for(var i=0; i<1000; i++) {
//         if(i%3 == 0) {
//             count += 1;
//         }
//     }
//     document.getElementById("txt__demSo").innerHTML = "Có " +count+ " số chia hết cho 3 và nhỏ hơn 1000.";
// }

document.getElementById("btn_2").onclick = function() {
    var count = 0;
    var n = 0;
    while(n<1000) {
        if(n%3 == 0) {
            count += 1;
        }
        n++;
    }
    document.getElementById("txt__demSo").innerHTML = "Có " +count+ " số chia hết cho 3 và nhỏ hơn 1000.";
}