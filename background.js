// This listener is called when the user types the keyword ("hi") as a greeting
// and then tab, and then some text. The `text` argument to the listener
// is the text the person wrote.
// The `suggest` argument is a function that can be used to programmatically
// add auto-complete suggestions

chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
  console.log('the user typed "' + text + '"');

  suggest([
    { content: 'depressed', description: 'depressed?' },
    { content: 'bored', description: 'bored?' },
    { content: 'fine', description: 'fine?' },
    { content: 'happy', description: 'happy?' },
    { content: 'missing me', description: 'missing me?' },
  ]);
});

chrome.omnibox.onInputEntered.addListener(function(text) {
  console.log('the user entered: "' + text + '"');
  chrome.tabs.executeScript({
    // code: `document.body.p.innerHTML = "${text}";`
    code: `document.getElementById("text").innerHTML = "${text}";`
   });
});
