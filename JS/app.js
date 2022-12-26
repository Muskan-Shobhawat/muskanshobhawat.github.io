let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");
let name3 = document.getElementById("name3");

name2.addEventListener("mouseenter", fun1);
function fun1() {
    name3.style.display = "block";
    name2.style.display = "none";
    name1.style.display = "none";
}

name2.addEventListener("mouseout", fun2);
function fun2() {
    name3.style.display = "none";
    name2.style.display = "block";
    name1.style.display = "block";
}

let bb1 = document.getElementById("bb1");
let bbb1 = document.getElementById("bbb1");
let bb2 = document.getElementById("bb2");
let bbb2 = document.getElementById("bbb2");
let bb3 = document.getElementById("bb3");
let bbb3 = document.getElementById("bbb3");


bb2.addEventListener("click", fun3);
let a = 0;
let b = 0;
// bb2.addEventListener("select", fun5);
function fun3() {
    bb2.style = "transform:rotate(0deg) translate(-5vw, -60vh); height:60vh; ";
    // bb2.style = "transform:rotate(0deg) translate3d(-5vw,-60vh,10px); height:60vh; ";
    bb1.style = "z-index:1; transform:rotate(-20deg) translate(-8vw, -10vh); height:50vh;  ";
    bbb1.style.height = "50vh";
    bbb2.style.height = "60vh";
    a = 1;
    console.log(a);
    if (b == 1) {
        console.log(a + "hello")
        bb2.style = "z-index:3; transform:rotate(0deg) translate(-5vw, -60vh); height:60vh; ";
        bb3.style = "z-index:1; transform:rotate(15deg) translate(-15vw, -108vh); height:50vh; ";
        // bb1.style = "z-index:1; transform:rotate(-25deg) translate(-9vw,-12vh); height:45vh;  ";
        bbb2.style.height = "60vh";
        bbb3.style.height = "50vh";
        // bbb1.style.height = "45vh";
    }
}

bb3.addEventListener("click", fun4);
function fun4() {
    bb3.style = "z-index:3; transform:rotate(0deg) translate(-5vw, -105vh); height:60vh; ";
    bb2.style = "z-index:2; transform:rotate(-15deg) translate(-2vw,-52vh); height:50vh;  ";
    bb1.style = "z-index:1; transform:rotate(-25deg) translate(-9vw,-8vh); height:45vh;  ";
    bbb1.style.height = "45vh";
    bbb2.style.height = "50vh";
    bbb3.style.height = "60vh";
    b = 1;
}
bb1.addEventListener("click", fun5);
function fun5() {
    bb3.style = "z-index:1; transform:rotate(25deg) translate(-21vw, -98vh); height:45vh; ";
    bb2.style = "z-index:2; transform:rotate(15deg) translate(-9vw, -60vh); height:50vh;  ";
    bb1.style = "z-index:3; transform:rotate(0deg) translate(-5vw, -10vh); height:60vh;  ";
    bbb1.style.height = "60vh";
    bbb2.style.height = "50vh";
    bbb3.style.height = "45vh";
}

var x = window.matchMedia("(max-width: 1500px)");
myfunction(x);
function myfunction(x) {
    if (x.matches) {
        bb2.addEventListener("click", fun6);
        let p = 0;
        let r = 0;
        function fun6() {
            bb2.style = "transform:rotate(0deg) translate(-5vw, -60vh); height:60vh; ";
            bb1.style = "z-index:1; transform:rotate(-20deg) translate(-8.5vw, -10vh); height:50vh;  ";
            bbb1.style.height = "50vh";
            bbb2.style.height = "60vh";
            p = 1;
            console.log(a);
            if (r == 1) {
                console.log(p + "its query")
                bb2.style = "z-index:3; transform:rotate(0deg) translate(-5vw, -60vh); height:60vh; ";
                bb3.style = "z-index:1; transform:rotate(15deg) translate(-16vw, -103vh); height:45vh; ";
                // bb1.style = "z-index:1; transform:rotate(-25deg) translate(-9vw,-12vh); height:45vh;  ";
                bbb2.style.height = "60vh";
                bbb3.style.height = "45vh";
                // bbb1.style.height = "45vh";
            }
        }

        bb3.addEventListener("click", fun7);
        function fun7() {
            bb3.style = "z-index:3; transform:rotate(0deg) translate(-5vw, -105vh); height:60vh; ";
            bb2.style = "z-index:2; transform:rotate(-15deg) translate(-1.7vw,-50vh); height:50vh;  ";
            bb1.style = "z-index:1; transform:rotate(-25deg) translate(-9.5vw,-8vh); height:45vh; ";
            bbb1.style.height = "45vh";
            bbb2.style.height = "50vh";
            bbb3.style.height = "60vh";
            r = 1;
        }
        bb1.addEventListener("click", fun8);
        function fun8() {
            bb3.style = "z-index:1; transform:rotate(25deg) translate(-23vw, -98vh); height:45vh; ";
            bb2.style = "z-index:2; transform:rotate(15deg) translate(-9.7vw, -60vh); height:50vh;  ";
            bb1.style = "z-index:3; transform:rotate(0deg) translate(-5vw, -10vh); height:60vh;  ";
            bbb1.style.height = "60vh";
            bbb2.style.height = "50vh";
            bbb3.style.height = "45vh";
        }
    }
}

var y = window.matchMedia("(max-width: 500px)");
myfunction(y);
function myfunction(y) {
    if (y.matches) {
        bb2.addEventListener("click", fun9);
        let c = 0;
        let d = 0;
        function fun9() {
            bb2.style = "transform:rotate(0deg) translate(-5vw, -45vh); height:60vh; ";
            bb1.style = "z-index:1; transform:rotate(-20deg) translate(-22vw, 6vh); height:50vh;  ";
            bbb1.style.height = "50vh";
            bbb2.style.height = "60vh";
            c = 1;
            console.log(c);
            if (d == 1) {
                console.log(c + "its query")
                bb2.style = "z-index:3; transform:rotate(0deg) translate(-5vw, -45vh); height:60vh; ";
                bb3.style = "z-index:1; transform:rotate(15deg) translate(-29.8vw, -90vh); height:45vh; ";
                // bb1.style = "z-index:1; transform:rotate(-25deg) translate(-9vw,-12vh); height:45vh;  ";
                bbb2.style.height = "60vh";
                bbb3.style.height = "45vh";
                // bbb1.style.height = "45vh";
            }
        }

        bb3.addEventListener("click", fun10);
        function fun10() {
            bb3.style = "z-index:3; transform:rotate(0deg) translate(-5vw, -87vh); height:60vh; ";
            bb2.style = "z-index:2; transform:rotate(-15deg) translate(-2vw,-32vh); height:50vh;  ";
            bb1.style = "z-index:1; transform:rotate(-25deg) translate(-28vw,12vh); height:45vh; ";
            bbb1.style.height = "45vh";
            bbb2.style.height = "50vh";
            bbb3.style.height = "60vh";
            d = 1;
        }
        bb1.addEventListener("click", fun11);
        function fun11() {
            bb3.style = "z-index:1; transform:rotate(25deg) translate(-46vw, -87vh); height:45vh; ";
            bb2.style = "z-index:2; transform:rotate(15deg) translate(-12vw, -48vh); height:50vh;  ";
            bb1.style = "z-index:3; transform:rotate(0deg) translate(-5vw, 5vh); height:60vh;  ";
            bbb1.style.height = "60vh";
            bbb2.style.height = "50vh";
            bbb3.style.height = "45vh";
        }
    }
}

var p = window.matchMedia("(max-width: 1080px)");
myfunction(p);
function myfunction(p) {
    if (p.matches) {
        bb2.addEventListener("click", fun9);
        let c = 0;
        let d = 0;
        function fun9() {
            bb2.style = "transform:rotate(0deg) translate(-5vw, -45vh); height:60vh; ";
            bb1.style = "z-index:1; transform:rotate(-20deg) translate(-32vw, 6vh); height:50vh;  ";
            bb3.style = "transform: rotate(25deg) translate(-68vw, -92vh);";
            bbb1.style.height = "50vh";
            bbb2.style.height = "60vh";
            c = 1;
            console.log(c);
            if (d == 1) {
                console.log(c + "its query")
                bb2.style = "z-index:3; transform:rotate(0deg) translate(-5vw, -45vh); height:60vh; ";
                bb3.style = "z-index:1; transform:rotate(15deg) translate(-40vw, -90vh); height:45vh; ";
                // bb1.style = "z-index:1; transform:rotate(-25deg) translate(-9vw,-12vh); height:45vh;  ";
                bbb2.style.height = "60vh";
                bbb3.style.height = "45vh";
                // bbb1.style.height = "45vh";
            }
        }

        bb3.addEventListener("click", fun10);
        function fun10() {
            bb3.style = "z-index:3; transform:rotate(0deg) translate(-5vw, -87vh); height:60vh; width:60vw; ";
            bb2.style = "z-index:2; transform:rotate(-15deg) translate(-4vw,-32vh); height:50vh;  ";
            bb1.style = "z-index:1; transform:rotate(-25deg) translate(-40vw,12vh); height:45vh; ";
            bbb1.style.height = "45vh";
            bbb2.style.height = "50vh";
            bbb3.style.height = "60vh";
            bbb3.style.width = "60vw";
            d = 1;
        }

        bb1.addEventListener("click", fun11);
        function fun11() {
            bb3.style = "z-index:1; transform:rotate(25deg) translate(-60vw, -90vh); height:45vh; ";
            bb2.style = "z-index:2; transform:rotate(15deg) translate(-12vw, -48vh); height:50vh;  ";
            bb1.style = "z-index:3; transform:rotate(0deg) translate(0vw, 5vh); height:60vh;  ";
            bbb1.style.height = "60vh";
            bbb2.style.height = "50vh";
            bbb3.style.height = "45vh";
        }
    }
}