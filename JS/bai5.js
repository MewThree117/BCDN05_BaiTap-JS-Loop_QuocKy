function bai5() {
    document.getElementById("lesson__1").style.display = "none";
    document.getElementById("lesson__2").style.display = "none";
    document.getElementById("lesson__3").style.display = "none";
    document.getElementById("lesson__4").style.display = "none";
    document.getElementById("lesson__5").style.display = "block";
    document.getElementById("lesson__6").style.display = "none";
    document.getElementById("lesson__7").style.display = "none";
}

/**
 * Khối 1: input 
 * n
 * 
 * Khối 2:
 * B1: lấy giá trị từ form
 * B2: xác định điều kiện và lập công thức
 * 
 * Khối 3: output
 * tinhGiaiThua
 * 
 */

 document.getElementById("btn_5").onclick = function() {
    var n = Number(document.getElementById("n5").value);
    var giaiThua = 1;
    for(var i=1; i<=n; i++){
        giaiThua *= i;
    }
    document.getElementById("txt__giaiThua").innerHTML = "Giai thừa: " + giaiThua;
}