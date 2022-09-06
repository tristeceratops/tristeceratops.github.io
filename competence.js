var btnSect2 = document.getElementById('btnSect2');
var btnSect3 = document.getElementById('btnSect3');
var btnSect4 = document.getElementById('btnSect4');


var section2 = document.getElementById("section2");
var section3 = document.getElementById("section3");
var section4 = document.getElementById("section4");

var btnSectArray = [btnSect2,btnSect3,btnSect4];
var SectArray = [section2,section3,section4];


for (let index = 0; index < btnSectArray.length; index++) {
    btnSectArray[index].style.cursor="pointer";
    btnSectArray[index].addEventListener("click",function(){
        SectArray[index].scrollIntoView({behavior: "smooth"});
    })
    
}

