const toggle = function(element, state="") {
    let elementState = getComputedStyle(element).getPropertyValue("display");
    let newElementState = "";

    if (elementState != "none") newElementState = "none";
    else if (state == "") newElementState = "block";
    else newElementState = state;

    element.style.display = newElementState;
    return newElementState;
}

const drpdwnToggle = function(drpdwn, state="") {
    let a = toggle(drpdwn, state);
    if (a == "none") drpdwn.previousElementSibling.querySelector("i").style.transform = "rotate(0deg)";
    else drpdwn.previousElementSibling.querySelector("i").style.transform = "rotate(180deg)";
}

const burgrIcon = document.getElementById("burgr-icon");
const drpdwnBtns = document.querySelectorAll(".drpdwn-btn");
const drpdwns = document.querySelectorAll(".drpdwn");
let actvDrpdwn;

burgrIcon.addEventListener("click", function(){
    let a = toggle(document.getElementById("burgr-menu"), "flex");
    if (a == "none") burgrIcon.src = "./images/icon-hamburger.svg";
    else burgrIcon.src = "./images/icon-close.svg";
    drpdwnToggle(actvDrpdwn, "none");
});

drpdwnBtns.forEach(
    function(drpdwnBtn){
        drpdwnBtn.addEventListener("click", function() {
            actvDrpdwn = drpdwnBtn.nextElementSibling;
            drpdwns.forEach(
                function(a) {
                    if (a !== actvDrpdwn) {

                        drpdwnToggle(a, "none");
                    }
                }
            );
            drpdwnToggle(actvDrpdwn);
        });
    }
);