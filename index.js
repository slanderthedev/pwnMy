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

async function pwnMe() {
	if (location.protocol = "https:") {
		document.getElementById("jbButton").disabled = true;
		if (currentFirmware(navigator.userAgent).startsWith("14.5")) {
			socket.send("log_normal", "Hey!\nAs of now, the jailbreak is not ready yet.");
			await kickstart145();
		} else if (currentFirmware(navigator.userAgent).startsWith("14.6")) {
			socket.send("log_normal", "Hey!\nAs of now, the jailbreak is not ready yet.");
			await kickstart146();
		} else {
			socket.send("error", "Detected a unsupported version/device");
		}
	}else{
		socket.send("error", "ur mom gey");
	}
}

const appHeight = () => {
	const doc = document.documentElement;
	doc.style.setProperty("--app-height", `${window.innerHeight}px`);
};

window.addEventListener("resize", appHeight);
appHeight();