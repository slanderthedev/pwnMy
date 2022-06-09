var headerTapCounter = 0;

currentFirmware = function (userAgent) {
	return userAgent.match(/\OS (.*?)\ like/)[1].replaceAll("_", ".");
};

function slideEasterEgg() {
	headerTapCounter++;
	if (headerTapCounter == 5) {
		document.getElementById("jbButton").style.display = "none";
		document.getElementById("page-wrap").style.display = "block";
	}
}

async function notReady() {
	if (navigator.userAgent.includes("Mac OS X") && !navigator.userAgent.includes("iPhone OS")) {
		alert(`MacOS is not supported ${navigator.userAgent}`);
	} else if (currentFirmware(navigator.userAgent).startsWith("14.5")) {
		socket.send("Jailbreak is not ready yet. The kernel exploit is written, but not implemented yet. I am working on it.");
		alert("Jailbreak is not ready yet. The kernel exploit is written, but not implemented yet. I am working on it.")
	} else if (currentFirmware(navigator.userAgent).startsWith("14.6")) {
		socket.send("Jailbreak is not ready yet. The kernel exploit is written, but not implemented yet. I am working on it.");
		alert("Jailbreak is not ready yet. The kernel exploit is written, but not implemented yet. I am working on it.")
	} else {
		alert("ERROR: Seems like you are on an unsupported device or iOS version.")
		socket.send("ERROR: Seems like you are on an unsupported device or iOS version.");
	}
}

async function pwnMe() {
	//alert(location.protocol)
	// if (location.protocol == "https:") {
		//document.getElementById("jbButton").disabled = true;
		if (navigator.userAgent.includes("Mac OS X") && !navigator.userAgent.includes("iPhone OS")) {
			alert(`MacOS is not supported ${navigator.userAgent}`);
		} else if (currentFirmware(navigator.userAgent).startsWith("14.5")) {
			socket.send("Starting exploitation for iOS 14.5");
			alert("Starting exploitation for iOS 14.5")
			return await kickstart145();
		} else if (currentFirmware(navigator.userAgent).startsWith("14.6")) {
			alert("Starting exploitation for iOS 14.6")
			socket.send("Starting exploitation for iOS 14.6");
			return await kickstart146();
		} else {
			alert("ERROR: Your Device or Version is unsupported!")
			return socket.send("Detected a unsupported version/device");
		}
	// }else{
    //     alert("exploitation only works over https");
    // }
}

const appHeight = () => {
	const doc = document.documentElement;
	doc.style.setProperty("--app-height", `${window.innerHeight}px`);
};

window.addEventListener("resize", appHeight);
appHeight();