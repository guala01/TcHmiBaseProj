// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.59/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject3;
        (function (TcHmiProject3) {
			function checkColor(par1) {
				if (par1 >= 12)
					return "255,0,0"
            }
            TcHmiProject3.checkColor = checkColor;
        })(TcHmiProject3 = Functions.TcHmiProject3 || (Functions.TcHmiProject3 = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('checkColor', 'TcHmi.Functions.TcHmiProject3', TcHmi.Functions.TcHmiProject3.checkColor);
