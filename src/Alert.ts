/**
 * @description 
 * https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/x83z1d9f%28v%3dvs.84%29
 * https://docs.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-messagebox?redirectedfrom=MSDN
 */
namespace DemoAlert {
    const WshShell = new ActiveXObject("WScript.Shell");
    const result = WshShell.Popup("hello", 0, "title", 0x0 + 0x10);
    WScript.Echo(result);
}