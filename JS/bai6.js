function bai6() {
    document.getElementById("lesson__1").style.display = "none";
    document.getElementById("lesson__2").style.display = "none";
    document.getElementById("lesson__3").style.display = "none";
    document.getElementById("lesson__4").style.display = "none";
    document.getElementById("lesson__5").style.display = "none";
    document.getElementById("lesson__6").style.display = "block";
    document.getElementById("lesson__7").style.display = "none";
}

document.getElementById("btn_6").onclick = function() {
    var content = "";
    for(i=0; i<10; i++) {
        if(i%2 == 0) {
            content += "<div class='chan'>Div Chẵn</div>";
        } else {
            content += "<div class='le'>Div Lẻ</div>";
        }
    }
    document.getElementById("txt__taoThe").innerHTML = content;    
}