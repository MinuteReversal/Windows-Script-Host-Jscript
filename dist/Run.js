"use strict";
var Test;
(function (Test) {
    var Run;
    (function (Run) {
        var WshShell = new ActiveXObject("WScript.Shell");
        var oExec = WshShell.Exec("calc");
        while (oExec.Status == 0) {
            WScript.Sleep(100);
        }
        WScript.Echo(oExec.Status);
    })(Run = Test.Run || (Test.Run = {}));
})(Test || (Test = {}));
