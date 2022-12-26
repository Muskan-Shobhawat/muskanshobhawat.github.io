let menuimg = document.getElementById("menuimg");
let formenu = document.getElementById("formenu");
let mid = document.getElementById("mid");
let num = 0;
menuimg.addEventListener("click", fun1)
function fun1() {
    if (num==1) {
        num=0;
        // console.log(num);
        formenu.style.display = "none";
        mid.style="transform:translate(0vw,0vh);"
    }else{
        formenu.style.display = "block";
        mid.style="transform:translate(0vw,-14.5vh);"
        num=1;
    }
    
}

// console.log(num);
