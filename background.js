chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "redirect" && message.url) {
      chrome.tabs.update(sender.tab.id, { url: message.url });
    }
  });