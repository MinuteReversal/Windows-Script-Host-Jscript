namespace AndroidEmulator {
    const WshShell = new ActiveXObject("WScript.Shell");
    WshShell.Run("%ANDROID_HOME%\\emulator\\emulator.exe @Nexus_5X_API_29", 0);
}