var btnSect1 = document.getElementById('btnSect1');
var btnSect2 = document.getElementById('btnSect2');
var btnSect3 = document.getElementById('btnSect3');
var btnSect4 = document.getElementById('btnSect4');
var btnSect5 = document.getElementById('btnSect5');
var btnSect6 = document.getElementById('btnSect6');

var section1 = document.getElementById("section1");
var section2 = document.getElementById("section2");
var section3 = document.getElementById("section3");
var section4 = document.getElementById("section4");
var section5 = document.getElementById("section5");
var section6 = document.getElementById("section6");

var btnSectArray = [btnSect1,btnSect2,btnSect3,btnSect4,btnSect5,btnSect6];
var SectArray = [section1,section2,section3,section4,section5,section6];


for (let index = 0; index < btnSectArray.length; index++) {
    btnSectArray[index].style.cursor="pointer";
    btnSectArray[index].addEventListener("click",function(){
        SectArray[index].scrollIntoView({behavior: "smooth"});
        console.log(SectArray[index].id);
    })
    
}