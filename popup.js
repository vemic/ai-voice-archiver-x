const recordBtn = document.getElementById("recordBtn");
const output = document.getElementById("output");

let recognizing = false;
let recognition;

function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = chrome.i18n.getMessage(key);
  });
}

document.addEventListener("DOMContentLoaded", applyI18n);

if ("webkitSpeechRecognition" in window) {
  recognition = new webkitSpeechRecognition();
  recognition.lang = "ja-JP";
  recognition.interimResults = false;

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    output.textContent = transcript;
    chrome.runtime.sendMessage({ type: "TRANSCRIPT", data: transcript });
  };
}

recordBtn.addEventListener("click", () => {
  if (!recognition) {
    alert("SpeechRecognition API not supported in this browser.");
    return;
  }
  if (!recognizing) {
    recognition.start();
    recordBtn.textContent = chrome.i18n.getMessage("recordStop");
  } else {
    recognition.stop();
    recordBtn.textContent = chrome.i18n.getMessage("recordStart");
  }
  recognizing = !recognizing;
});
