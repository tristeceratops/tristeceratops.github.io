var btnSect1 = document.getElementById('btnSect1');
var textBtnSect1 = document.getElementById("textBtnSect1");
btnSect1.style.cursor="pointer";
btnSect1.addEventListener("click",function() {
    document.location.href="../index.html";
})

btnSect1.addEventListener("mouseover",function() {
    textBtnSect1.style.visibility="visible";
})

btnSect1.addEventListener("mouseout",function() {
    textBtnSect1.style.visibility="hidden";
})