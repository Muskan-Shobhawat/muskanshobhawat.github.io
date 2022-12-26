let football=document.getElementById("football").innerText;
let swimming=document.getElementById("swimming").innerText;
let yoga=document.getElementById("yoga").innerText;
let tennis=document.getElementById("tennis").innerText;
let bluecircle1=document.getElementById("bluecircle1");
let bluecircle2=document.getElementById("bluecircle2");
let bluecircle3=document.getElementById("bluecircle3");
let bluecircle4=document.getElementById("bluecircle4");
let regex=/\n/;
let str=football.split(regex).length-1;
let str2=swimming.split(regex).length;
let str3=swimming.split(regex).length+2;
let str4=swimming.split(regex).length+2;
console.log(str,str2,str3,str4);

var p = window.matchMedia("(max-width: 1080px)");
myfunction(p);
function myfunction(p) {
    if (p.matches) {
        let num=1;
        while(num<=str){
            let a=document.createElement('div');
            a.style="height:0.9vh; width:1.5vw; border-radius:100%; background:rgba(17,45,78,1)";
            bluecircle1.appendChild(a);
            num++;
        }
        
        let num2=1;
        while(num2<=str2){
            let a=document.createElement('div');
            a.style="height:0.9vh; width:1.5vw; border-radius:100%; background:rgba(17,45,78,1)";
            bluecircle2.appendChild(a);
            num2++;
        }
        
        let num3=1;
        while(num3<=str3){
            let a=document.createElement('div');
            a.style="height:0.9vh; width:1.5vw; border-radius:100%; background:rgba(17,45,78,1)";
            bluecircle3.appendChild(a);
            num3++;
        }
        
        
        let num4=1;
        while(num4<=str4){
            let a=document.createElement('div');
            a.style="height:0.9vh; width:1.5vw; border-radius:100%; background:rgba(17,45,78,1)";
            bluecircle4.appendChild(a);
            num4++;
        }
}
else{
    let num=1;
    while(num<=str){
        let a=document.createElement('div');
        a.style="height:0.9vh; width:0.5vw; border-radius:100%; background:rgba(17,45,78,1)";
        bluecircle1.appendChild(a);
        num++;
    }
    
    let num2=1;
    while(num2<=str2){
        let a=document.createElement('div');
        a.style="height:0.9vh; width:0.5vw; border-radius:100%; background:rgba(17,45,78,1)";
        bluecircle2.appendChild(a);
        num2++;
    }
    
    let num3=1;
    while(num3<=str3){
        let a=document.createElement('div');
        a.style="height:0.9vh; width:0.5vw; border-radius:100%; background:rgba(17,45,78,1)";
        bluecircle3.appendChild(a);
        num3++;
    }
    
    
    let num4=1;
    while(num4<=str4){
        let a=document.createElement('div');
        a.style="height:0.9vh; width:0.5vw; border-radius:100%; background:rgba(17,45,78,1)";
        bluecircle4.appendChild(a);
        num4++;
    }   
}
}

// let boxcontainer=document.getElementById("boxcontainer2");
// boxcontainer.addEventListener("scroll",fun1);
// function fun1(){
//     // console.log("scroll");
//     // window.alert("hi")
// }