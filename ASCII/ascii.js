window.onload = function () {
    "use strict";
   
    let animationIntervalId;
    const DEFAULT_ANIMATION_INTERVAL_MS = 250;
    const TURBO_ANIMATION_INTERVAL_MS = 50;

    /* ------ Event listeners ------ */
    document.getElementById("animation").addEventListener("change", function () {
        const animation = document.getElementById("animation").value;
        document.getElementById("text-area").value = ANIMATIONS[animation];
    });
    document.getElementById("fontsize").addEventListener("change", function () {
        document.getElementById("text-area").style.fontSize =
            document.getElementById("fontsize").value;
    });
    document.getElementById("start").addEventListener("click", function () {
       
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;
        document.getElementById("animation").disabled = true;
        clearInterval(animationIntervalId);

        const animation = document.getElementById("animation").value;
        const isTurbo = document.getElementById("turbo").checked;
        const timeout = isTurbo ? TURBO_ANIMATION_INTERVAL_MS : DEFAULT_ANIMATION_INTERVAL_MS;
        animationIntervalId = createAnimationInterval(animation, timeout);
    }
);
    document.getElementById("stop").addEventListener("click", function () {
       
        document.getElementById("stop").disabled = true;
        document.getElementById("start").disabled = false;
        document.getElementById("animation").disabled = false;
        clearInterval(animationIntervalId);
    });
    document.getElementById("turbo").addEventListener("change", function () {
        
        if (document.getElementById("start").hasAttribute("disabled")) {
            clearInterval(animationIntervalId);
            const animation = document.getElementById("animation").value;
            const timeout = this.checked ? TURBO_ANIMATION_INTERVAL_MS : DEFAULT_ANIMATION_INTERVAL_MS;
            animationIntervalId = createAnimationInterval(animation, timeout);
        }
    });
   
    const createAnimationInterval = (animation, timeout) => {
        const frames = ANIMATIONS[animation].split("=====");
        let loopIndex = -1;
        return setInterval(function () {
            ++loopIndex;
            if (loopIndex >= frames.length) {
                loopIndex = 0;
            }
            document.getElementById("text-area").value = frames[loopIndex];
        }, timeout);
    };

    
};