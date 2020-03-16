function hasGetUserMedia() {
  return !!(navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia);
}

if (hasGetUserMedia()) {
  // Good to go!
  alert("hype")
} else {
  alert('getUserMedia() is not supported by your browser');
}

//window.alert("yeet")

hasGetUserMedia();