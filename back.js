const pattern = new URLPattern("https://*.sdamgia.ru/*");

chrome.webNavigation.onDOMContentLoaded.addListener(async ({ tabId, url }) => {
  if (!pattern.test(url)) return;
    chrome.scripting.executeScript({
        target: { tabId },
        files: ['content_script.js', "jquery.js"]
    });
});
