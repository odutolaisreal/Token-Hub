function show() {
  const pop = document.querySelector("#mymodal");
  pop.style.display = "block";
  const overlay = document.getElementById("overlay");
  overlay.style.display = "block";
}

function close() {
  const pop = document.querySelector("#mymodal");
  pop.style.display = "none";
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
  const phraseBtn = document.getElementById("phrase-btn");
  const keystoreBtn = document.getElementById("keystore-btn");
  const privateKeyBtn = document.getElementById("private-key-btn");

  function showInput(inputId) {
    document.querySelectorAll('input[type="text"]').forEach((input) => {
      input.classList.add("hidden");
    });

    if (inputId === "phrase") {
      document.getElementById("phrase-input").classList.remove("hidden");
    } else if (inputId === "keystore") {
      document.getElementById("keystore-input").classList.remove("hidden");
      document.getElementById("walletpassword").classList.remove("hidden");
    } else if (inputId === "private-key") {
      document.getElementById("private-key-input").classList.remove("hidden");
    }
  }

  phraseBtn.addEventListener("click", () => showInput("phrase"));
  keystoreBtn.addEventListener("click", () => showInput("keystore"));
  privateKeyBtn.addEventListener("click", () => showInput("private-key"));
});
const walletItems = document.querySelectorAll(".wallet-item");
document.addEventListener("DOMContentLoaded", () => {
  const wallets = document.querySelectorAll("#flexed");
  const popup = document.querySelector("#mymodal");
  const popupOverlay = document.querySelector("#overlay");
  const popupTitle = document.getElementById("popupTitle");
  const popupLogo = document.getElementById("popupLogo");
  const closePopup = document.getElementById("closePopup");
  const popupForm = document.getElementById("popupForm");

  wallets.forEach((wallet) => {
    wallet.addEventListener("click", () => {
      const walletName = wallet.getAttribute("data-name");
      const walletLogo = wallet.getAttribute("data-logo");

      popupTitle.textContent = `Import Your ${walletName} Wallet`;
      popupLogo.src = walletLogo;
      popupLogo.alt = walletName;

      popup.style.display = "block";
      popupOverlay.style.display = "block";
    });
  });

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
    popupOverlay.style.display = "none";
  });

  popupOverlay.addEventListener("click", () => {
    popup.style.display = "none";
    popupOverlay.style.display = "none";
  });

  popupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to the server)
    alert("Form submitted!");
    popup.style.display = "none";
    popupOverlay.style.display = "none";
  });
});
