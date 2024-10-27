function selectwallet() {
  const Walletcontain = document.getElementById("Walletcontain");
  Walletcontain.style.display = "block";
  const walletoverlay = document.getElementById("walletoverlay");
  walletoverlay.style.display = "block";
}
function toggle() {
  var additionalWallets = document.getElementById("additionalWallets");
  const toggleoptions = document.getElementById("toggleoptions");

  if (additionalWallets.style.display === "block") {
    additionalWallets.style.display = "none";
    toggleoptions.innerHTML = "More Options";
  } else {
    additionalWallets.style.display = "block";
    toggleoptions.innerHTML = "Less Options";
  }
}
function closeWallet() {
  const Walletcontain = document.getElementById("Walletcontain");
  Walletcontain.style.display = "none";
  const walletoverlay = document.getElementById("walletoverlay");
  walletoverlay.style.display = "none";
}
function redirectTo(url) {
  window.open(url, "_blank"); 
}
