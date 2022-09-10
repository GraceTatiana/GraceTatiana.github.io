"use strict";
window.onload = function(){
    

    let animationIntervalID;
    const DEFAULT_ANIMATION_INTERVAL = 250;
    const TURBO_ANIMATION_INTERVAL = 50;
/* event listeners */
document.getElementById("start").addEventListener("click", startAnimation )
document.getElementById("stop").addEventListener("click", stopAnimation )
document.getElementById("animation").addEventListener("change", displayAnimation)
document.getElementById("fontsize").addEventListener("change", changeFont)
document.getElementById("turbo").addEventListener("change", function (){
    if(document.getElementById("start").hasAttribute("disabled")){
        clearInterval(animationIntervalID);
        const animation = document.getElementById("animation").value;
        const timeout = this.checked ? TURBO_ANIMATION_INTERVAL : DEFAULT_ANIMATION_INTERVAL;
        animationIntervalID = createAnimationInterval(animation, timeout);
    }
});


/* functions */
function startAnimation(){
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("animation").disabled = true;
    clearInterval(animationIntervalID);

    const animation = document.getElementById("animation").value;
    const isTurbo = document.getElementById("turbo").checked;
    const timeout = isTurbo ? TURBO_ANIMATION_INTERVAL : DEFAULT_ANIMATION_INTERVAL;
    animationIntervalID = createAnimationInterval(animation, timeout);
}

function stopAnimation(){
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("animation").disabled = false;
    clearInterval(animationIntervalID);
}

function displayAnimation(){
    const animation = document.getElementById("animation").value;
    document.getElementById("text-area").value = ANIMATIONS[animation];
}

function changeFont(){
    document.getElementById("text-area").style.fontSize = document.getElementById("fontsize").value;
}

const createAnimationInterval = (animation, timeout) =>{
    const frames = ANIMATIONS[animation].split("=====");
    let loopInterval = -1;

    return setInterval(function (){
        ++loopInterval;
        if(loopInterval >= frames.length){
            loopInterval = 0;
        }
        document.getElementById("text-area").value = frames[loopInterval];
    }, timeout);
};
};

