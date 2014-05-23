/* Javascript */
(function(window, undefined){
    "use strict";
    var document = window.document,
        debugElem,
        hasFlashlight = false;

    function vibrate(num){
        navigator.notification.vibrate(num);
    }

    function toggleFlashlight(elem){
        try{
            if(hasFlashlight){
                window.plugins.flashlight.toggle();
                elem.innerHTML = (window.plugins.flashlight._isSwitchedOn) ? "Flashlight (On)" : "Flashlight (Off)" ;
            }
        } catch(err) {
            debugLog('ERROR: '+err.message);
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
            debugLog('ERROR: '+err.message);
        }
    }

    function scanQrCode(){
        cordova.plugins.barcodeScanner.scan(
          function (result) {
              debugLog("We got a barcode\n" +
                    "Result: " + result.text + "\n" +
                    "Format: " + result.format + "\n" +
                    "Cancelled: " + result.cancelled);
          }, 
          function (error) {
              debugLog("Scanning failed: " + error);
          }
       );
    }

    function debugLog(str){
        debugElem.innerHTML += str.toString()+'<br>';
    }

    function init(){
        debugElem = document.getElementById('debug');
        debugLog('init...');
        testFlashlight();
    }

    window.app = {
        vibrate : vibrate,
        toggleFlashlight : toggleFlashlight,
        scanQrCode : scanQrCode
    };
    window.onload = init;
})(window);