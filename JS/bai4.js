function bai4() {
    document.getElementById("lesson__1").style.display = "none";
    document.getElementById("lesson__2").style.display = "none";
    document.getElementById("lesson__3").style.display = "none";
    document.getElementById("lesson__4").style.display = "block";
    document.getElementById("lesson__5").style.display = "none";
    document.getElementById("lesson__6").style.display = "none";
    document.getElementById("lesson__7").style.display = "none";
}

/**
 * Khối 1: input 
 * x
 * n
 * 
 * Khối 2:
 * B1: lấy giá trị từ form
 * B2: xác định điều kiện và lập công thức
 * 
 * Khối 3: output
 * tong
 * 
 */

document.getElementById("btn_4").onclick = function() {
    var x = Number(document.getElementById("x4").value);
    var n = Number(document.getElementById("n4").value);
    var sum = 0;
    for(var i=1; i<=n; i++){
        sum += Math.pow(x, i);
    }
    document.getElementById("txt__tong").innerHTML = "Tổng: " + sum;
}