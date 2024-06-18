function revealtospan() {
    document.querySelectorAll(".reveal").forEach(function (elem) {
        let spanpar = document.createElement('span');
        let spanchild = document.createElement('span');

        spanpar.classList.add("parent");
        spanchild.classList.add("child");

        spanchild.innerHTML = elem.innerHTML;
        spanpar.appendChild(spanchild);

        elem.innerHTML = "";
        elem.appendChild(spanpar);
    })
}
function loadinganimation() {
    var tl = gsap.timeline();

    tl.from('.child span', {
        x: 100,
        stagger: .2,
        duration: 2,
        ease: Power3.easeInOut
    })
        .to(".parent .child", {
            y: '-100%',
            duration: .5,
            ease: Circ.easeInOut
        })
        .to('#l1', {
            height: 0,
            duration: 2,
            ease: Expo.easeInOut
        }).to('#l2', {
            height: "100%",
            duration: 2,
            delay: -1.75,
            ease: Expo.easeInOut
        }).to('#l3', {
            top: 0,
            height: "100%",
            duration: 2,
            delay: -1.3,
            ease: Expo.easeInOut
        }).to('#navbar h1', {
            y: 0,
            delay: -1,
            ease: Expo.easeInOut
        })
        .to('#l3 #r1 h1', {
            y: 0,
            duration: 1,
            delay: -1.3,
            ease: Expo.easeInOut
        })
        .to('#l3 #r2 h1', {
            y: 0,
            duration: 1,
            delay: -1.3,
            ease: Expo.easeInOut
        })
        .to("#Visual>g>g>path , #Visual>g>g>polyline", {
            strokeDashoffset: 0,
            duration: 2,
            ease: Expo.easeInOut,
            delay: 0
        })
}
function annimateSvg() {
    document.querySelectorAll("#Visual>g").forEach(function (e) {
        var character = e.childNodes[1].childNodes[1];
        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';
    })

}
function cards() {
    gsap.to("#card1", {
        scrollTrigger: {
            trigger: "#first",
            start: "50% 100%",
            end: "50% 50%",
            scrub: 1,

        },
        x: 50,
        y: 0,
        rotate: 0,
        duration: 2,
        ease: Power1.easeInOut
    })

    gsap.to("#card2", {
        scrollTrigger: {
            trigger: "#first",
            start: "50% 100%",
            end: "50% 50%",
            scrub: 1,

        },
        x: 70,
        y: 50,
        rotate: 5,
        duration: 2,
        ease: Power1.easeInOut
    })

    gsap.to("#card3", {
        scrollTrigger: {
            trigger: "#first",
            start: "50% 100%",
            end: "50% 50%",
            scrub: 1,

        },
        x: 90,
        y: 100,
        rotate: 10,
        duration: 2,
        ease: Power1.easeInOut
    })
}
function cardShow() {
    document.querySelectorAll(".image-show")
        .forEach(function (cnt) {
            var showimg;
            cnt.addEventListener("mousemove", function (dets) {
                document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
                showimg = dets.target;
                document.querySelector("#cursor").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`
                showimg.style.filter="grayscale(0)";
                document.querySelector("#third").style.backgroundColor= "grey";
                document.querySelector("#third-2").style.backgroundColor= "grey";
                document.querySelector("#second").style.backgroundColor= "grey";
                document.querySelector("#fourth").style.backgroundColor= "grey";
                document.querySelector("#third-3").style.backgroundColor= "grey";
            })
            cnt.addEventListener("mouseleave", function (dets) {
                document.querySelector("#cursor").children[showimg.dataset.index].style.opacity = 0;
                
                showimg.style.filter="grayscale(1)";
                document.querySelector("#third").style.backgroundColor="#fcfaf8";
                document.querySelector("#second").style.backgroundColor= "#fcfaf8";
                document.querySelector("#third-2").style.backgroundColor= "#fcfaf8";
                document.querySelector("#fourth").style.backgroundColor= "#fcfaf8";
                document.querySelector("#third-3").style.backgroundColor= "#fcfaf8";
            })
        })
}
function cardShow2() {
    document.querySelectorAll(".image-show-2")
        .forEach(function (cnt) {
            var showimg;
            cnt.addEventListener("mousemove", function (dets) {
                document.querySelector("#cursor-2").children[dets.target.dataset.index].style.opacity = 1;
                showimg = dets.target;
                document.querySelector("#cursor-2").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`
                showimg.style.filter="grayscale(0)";
                document.querySelector("#third").style.backgroundColor= "grey";
                document.querySelector("#third-2").style.backgroundColor= "grey";
                document.querySelector("#second").style.backgroundColor= "grey";
                document.querySelector("#fourth").style.backgroundColor= "grey";
                document.querySelector("#third-3").style.backgroundColor= "grey";
                
            })
            cnt.addEventListener("mouseleave", function (dets) {
                document.querySelector("#cursor-2").children[showimg.dataset.index].style.opacity = 0;
              
                showimg.style.filter="grayscale(1)";
                document.querySelector("#third").style.backgroundColor="#fcfaf8";
                document.querySelector("#second").style.backgroundColor= "#fcfaf8";
                document.querySelector("#third-2").style.backgroundColor= "#fcfaf8";
                document.querySelector("#fourth").style.backgroundColor= "#fcfaf8";
                document.querySelector("#third-3").style.backgroundColor= "#fcfaf8";
            })
        })
}


function cardShow3() {
    document.querySelectorAll(".image-show-3")
        .forEach(function (cnt) {
            var showimg;
            cnt.addEventListener("mousemove", function (dets) {
                document.querySelector("#cursor-3").children[dets.target.dataset.index].style.opacity = 1;
                showimg = dets.target;
                document.querySelector("#cursor-3").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`
                showimg.style.filter="grayscale(0)";
                document.querySelector("#third").style.backgroundColor= "grey";
                document.querySelector("#third-2").style.backgroundColor= "grey";
                document.querySelector("#second").style.backgroundColor= "grey";
                document.querySelector("#fourth").style.backgroundColor= "grey";
                document.querySelector("#third-3").style.backgroundColor= "grey";
            })
            cnt.addEventListener("mouseleave", function (dets) {
                document.querySelector("#cursor-3").children[showimg.dataset.index].style.opacity = 0;
              
                showimg.style.filter="grayscale(1)";
                document.querySelector("#third").style.backgroundColor="#fcfaf8";
                document.querySelector("#second").style.backgroundColor= "#fcfaf8";
                document.querySelector("#third-2").style.backgroundColor= "#fcfaf8";
                document.querySelector("#fourth").style.backgroundColor= "#fcfaf8";
                document.querySelector("#third-3").style.backgroundColor= "#fcfaf8";
            })
        })
}


function emailme(){
    window.addEventListener("mousemove",function(det){
        document.querySelector("#fourth-circle").style.transform=`translate(${det.clientX*.1}px,${det.clientY*.05}px`;
        
    })
    document.querySelector("#fourth-circle").addEventListener("mousemove",function(det){
        document.querySelector("#fourth-circle h1").textContent="yp8502@gmail.com";
    })
    document.querySelector("#fourth-circle").addEventListener("mouseleave",function(det){
        document.querySelector("#fourth-circle h1").textContent="EMAIL ME";
    })
}



revealtospan();

loadinganimation();

annimateSvg();

cards();

cardShow();

cardShow2();
cardShow3();
emailme();
