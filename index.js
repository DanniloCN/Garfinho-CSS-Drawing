var pupila = document.getElementsByClassName("pupila")
document.onmousemove = function(){
    var x = event.clientX * 100 / window.innerWidth + "%";
    var Y = event.clientY * 100 / window.innerHeight + "%";
    for(var k=0; k<2; k++){
        pupila[k].style.left = x
        pupila[k].style.top = y
        pupila[k].style.transform = "translate(-"+x+",-"+y+")"
    }
}
var pupila1 = document.getElementsByClassName("pupila1")
document.onmousemove = function(){
    var x = event.clientX * 100 / window.innerWidth + "%";
    var Y = event.clientY * 100 / window.innerHeight + "%";
    for(var k=0; k<2; k++){
        pupila1[k].style.left = x
        pupila1[k].style.top = y
        pupila1[k].style.transform = "translate(-"+x+",-"+y+")"
    }
}