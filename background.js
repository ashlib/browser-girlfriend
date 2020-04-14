console.log('omnibox extension version 1');

// This listener is called when the user types the keyword ("color")
// and then tab, and then some text. The `text` argument to the listener
// is the text the person wrote.
// The `suggest` argument is a function that can be used to programmatically
// add auto-complete suggestions
chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
  console.log('the user typed "' + text + '"');

  suggest([
    { content: 'red', description: 'roses, firetrucks, blood' },
    { content: 'green', description: 'grass, cash, boogers' },
    { content: 'pink', description: 'cotton candy, bubble gum, shrimp, flamingoes' },
    { content: 'blue', description: 'the sky, the sea, blueberries' },
    { content: 'yellow', description: 'the sun, rubber ducks, lemons' },
    { content: 'orange', description: 'oranges, basketballs, sunrises' },
    { content: 'purple', description: 'plums, lilacs, amethyst stones' },
    { content: 'brown', description: 'dirt, chocolate, bears' },
    { content: 'white', description: 'clouds, cotton balls, bunnies' },
    { content: 'black', description: 'my soul, the abyss, oblivion' },
  ]);
});

chrome.omnibox.onInputEntered.addListener(function(text) {
  console.log('the user entered: "' + text + '"');
  chrome.tabs.executeScript({
    code: `document.body.style.color = "${text}";`
  });
});

// // https://developer.chrome.com/extensions/background_pages
// // https://stackoverflow.com/questions/27239280/
//
//
// //Social Media Url Recognition
// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   if (changeInfo.status == 'complete') {
//     if (tab.url.indexOf("twitter") != -1) {
//       chrome.tabs.create({url:"social.html"});
//     } else if (tab.url.indexOf("youtube") != -1) {
//       chrome.tabs.create({url:"social.html"});
//     } else if (tab.url.indexOf("instagram") != -1) {
//       chrome.tabs.create({url:"social.html"});
//     } else if (tab.url.indexOf("tiktok") != -1) {
//       chrome.tabs.create({url:"social.html"});
//     } else if (tab.url.indexOf("netflix") != -1) {
//       chrome.tabs.create({url:"social.html"});
//     } else if (tab.url.indexOf("disneyplus") != -1) {
//       chrome.tabs.create({url:"social.html"});
//     }
//   }
// });
//
//
// //Shopping Url Recognition
// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   if (changeInfo.status == 'complete') {
//     if (tab.url.indexOf("amazon") != -1) {
//       chrome.tabs.create({url:"shopping.html"});
//     } else if (tab.url.indexOf("urbanoutfitters") != -1) {
//       chrome.tabs.create({url:"shopping.html"});
//     } else if (tab.url.indexOf("ae") != -1) {
//       chrome.tabs.create({url:"shopping.html"});
//     } else if (tab.url.indexOf("ulta") != -1) {
//       chrome.tabs.create({url:"shopping.html"});
//     } else if (tab.url.indexOf("sephora") != -1) {
//       chrome.tabs.create({url:"shopping.html"});
//     } else if (tab.url.indexOf("brandymelville") != -1) {
//       chrome.tabs.create({url:"shopping.html"});
//     }
//   }
// });
//
// //School Url Recognition
// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   if (changeInfo.status == 'complete') {
//     if (tab.url.indexOf("drive.google") != -1) {
//       chrome.tabs.create({url:"school.html"});
//     } else if (tab.url.indexOf("mail.google") != -1) {
//       chrome.tabs.create({url:"school.html"});
//     } else if (tab.url.indexOf("newclasses") != -1) {
//       chrome.tabs.create({url:"school.html"});
//     } else if (tab.url.indexOf("zoom") != -1) {
//       chrome.tabs.create({url:"school.html"});
//     }
//   }
// });
