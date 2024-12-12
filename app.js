let newUrl = window.location.href.replace("watch?v=", "embed/");
let url = window.location.href.replace("https://www.youtube.com", "one:3000")
chrome.runtime.sendMessage({ action: "redirect", url: url });