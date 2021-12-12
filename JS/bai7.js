function bai7() {
    document.getElementById("lesson__1").style.display = "none";
    document.getElementById("lesson__2").style.display = "none";
    document.getElementById("lesson__3").style.display = "none";
    document.getElementById("lesson__4").style.display = "none";
    document.getElementById("lesson__5").style.display = "none";
    document.getElementById("lesson__6").style.display = "none";
    document.getElementById("lesson__7").style.display = "block";
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
 * xuất các giá trị
 * 
 */

 document.getElementById("btn_7").onclick = function() {
    var n = Number(document.getElementById("n7").value);
    var prt = "";
    for(var i=1; i<=n; i++) {
        var m = Math.floor(Math.sqrt(i));
        var tongJ = 0;
        var tongJ_thoaDieuKien = 0;
        for(var j=2; j<=m; j++) {
            tongJ += j;
            if(i%j != 0) {
                tongJ_thoaDieuKien += j;
            }
        }
        if(tongJ_thoaDieuKien == tongJ && i>1) {
            prt += " " + i;
        }
    }
    document.getElementById("txt__print").innerHTML = prt;
}