'use strict';
var userId = {
	user: "guestUser"
}
function loadGuest() {
	userId = "guestUser";
	window.location.href = "loggedIn";
}
