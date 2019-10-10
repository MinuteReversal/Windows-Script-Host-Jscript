"use strict";
var Test;
(function (Test) {
    var Sleep;
    (function (Sleep) {
        WScript.Sleep(1000);
        WScript.Echo("1s");
    })(Sleep = Test.Sleep || (Test.Sleep = {}));
})(Test || (Test = {}));
