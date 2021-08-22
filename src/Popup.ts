/**
 * @description
 * http://4umi.com/web/javascript/shell.php
 * https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/x83z1d9f%28v%3dvs.84%29
 */
namespace TestPopup {
  const WshShell = new ActiveXObject("WScript.Shell");
  WshShell.Popup("hello", 0, "title", 0);
  const result = WshShell.Popup("hello", 0, "title", 1);
  WScript.Echo(result);
}
