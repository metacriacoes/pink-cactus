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
        try{
            if(hasFlashlight){
                //this.innerHTML = "Flashlight (On)";
                window.plugins.flashlight.toggle();
            }
        } catch(err) {
            console.log('ERROR:',err);
        }
    }

    function testFlashlight(){
        try{
            window.plugins.flashlight.available(function(isAvailable) {
              if (isAvailable) {
                hasFlashlight = true;
              } else {
                hasFlashlight = false;
              }
            });
        } catch(err) {
            console.log('ERROR:',err);
        }
    }

    function init(){
        console.log('init...');
        testFlashlight();
    }

    window.app = {
        vibrate : vibrate,
        toggleFlashlight : toggleFlashlight
    };
    window.onload = init;
})(window);