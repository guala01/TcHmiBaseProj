// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.59/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject3;
        (function (TcHmiProject3) {
			function addItem(name, age, height, dogArray) {
				let tempDogAray = dogArray;
				cane = { Altezza: height, Eta: age, Nome: name };
				tempDogAray.push(cane);
				console.log(tempDogAray);
				TcHmi.Symbol.writeEx('%i%caneArray%/i%', tempDogAray, function (data) {
					if (data.error === TcHmi.Errors.NONE) {
						console.log("Aggiunto elemento");
					} else {
						console.log("Errore");
					}
				});
			}
            TcHmiProject3.addItem = addItem;
        })(TcHmiProject3 = Functions.TcHmiProject3 || (Functions.TcHmiProject3 = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('addItem', 'TcHmi.Functions.TcHmiProject3', TcHmi.Functions.TcHmiProject3.addItem);
