function bai3() {
    document.getElementById("lesson__1").style.display = "none";
    document.getElementById("lesson__2").style.display = "none";
    document.getElementById("lesson__3").style.display = "block";
    document.getElementById("lesson__4").style.display = "none";
    document.getElementById("lesson__5").style.display = "none";
    document.getElementById("lesson__6").style.display = "none";
    document.getElementById("lesson__7").style.display = "none";
}

document.getElementById("btn_3").onclick = function() {
    var sum = 0;
    for(var i=1; i<10000; i++) {
        sum += i;
        if(sum>10000) {
            break;
        }
    }
    document.getElementById("txt__find").innerHTML = i;
}

// while:
// document.getElementById("btn_3").onclick = function() {
//     var sum = 0;
//     var n = 1;
//     while(n<10000) {
//         sum += n;
//         if(sum>10000) {
//             break;
//         }
//         n++;
//     }
//     document.getElementById("txt__find").innerHTML = n;
// }
