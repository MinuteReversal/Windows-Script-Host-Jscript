namespace Test.Run {
    const WshShell = new ActiveXObject("WScript.Shell");
    const oExec = WshShell.Exec("calc");

    while (oExec.Status == 0) {
        WScript.Sleep(100);
    }

    WScript.Echo(oExec.Status);
}