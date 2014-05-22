/* Javascript */
(function(window, undefined){
    "use strict";
    var document = window.document,
        hasFlashlight = false,
        btnFlashlightElem;

    function vibrate(num){
        navigator.notification.vibrate(num);
    }

    function toggleFlashlight(this){
        if(hasFlashlight){
            this.innerHTML = "Flashlight (On)";
            window.plugins.flashlight.toggle();
        }
    }

    function testFlashlight(){
        window.plugins.flashlight.available(function(isAvailable) {
          if (isAvailable) {
            hasFlashlight = true;
          } else {
            hasFlashlight = false;
          }
        });
    }

    function init(){
        btnFlashlightElem = document.

        testFlashlight();
    }

    window.app = {
        vibrate : vibrate,
        toggleFlashlight : toggleFlashlight
    };
    window.onload = init;
})(window);