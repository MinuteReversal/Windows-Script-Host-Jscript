# Windows Script Host

## WScript

```typescript
WScript.Echo("Hello World!");
```

[docs](<https://docs.microsoft.com/en-us/previous-versions/9bbdkx3k(v=vs.85)>)

## WshShell Object

```typescript
const WshShell = new ActiveXObject("WScript.Shell");
const oExec = WshShell.Exec("calc");
```

[docs](<https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/aew9yb99(v=vs.84)?redirectedfrom=MSDN>)  
[methods](<https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/2x3w20xf(v=vs.84)>)
