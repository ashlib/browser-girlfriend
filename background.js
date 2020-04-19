// This listener is called when the user types the keyword ("hi") as a greeting
// and then tab, and then some text. The `text` argument to the listener
// is the text the person wrote.
// The `suggest` argument is a function that can be used to programmatically
// add auto-complete suggestions

chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
  console.log('the user typed "' + text + '"');

  suggest([
    { content: 'depressed', description: 'depressed? sad?' },
    { content: 'bored', description: 'bored?' },
    { content: 'fine', description: 'fine? okay?' },
    { content: 'happy', description: 'happy?' },
    { content: 'missing me', description: 'missing me?' },
  ]);
});

chrome.omnibox.onInputEntered.addListener(function(text) {
  console.log('the user entered: "' + text + '"');
  chrome.tabs.executeScript({

    code:
    `
    var images = [
    "images/myAvatarHugs.png",
    "images/myAvatarLaugh.png",
    "images/myAvatarSmile.png",
    "images/myAvatarYay.png",
    "images/myAvatarCall.png",
    "images/myAvatarSleep.png",
    ];

    if ("${text}" == "sad" || "${text}" == "depressed") {
      document.getElementById("text").innerHTML = "Oh no! Hugs?";
      document.getElementById("avatar").src = images[0];
    }

    if ("${text}" == "bored") {
      document.getElementById("text").innerHTML = "No worries, look at all these funny Instagram posts! I DIED!";
      document.getElementById("avatar").src = images[1];
    }

    if ("${text}" == "fine"  || "${text}" == "okay" ) {
      document.getElementById("text").innerHTML = "That's not good enough! Let me see you smile!!!!";
      document.getElementById("avatar").src = images[2];
    }

    if ("${text}" == "happy") {
      document.getElementById("text").innerHTML = "Yay!!!";
      document.getElementById("avatar").src = images[3];
    }

    if ("${text}" == "missing you") {
      document.getElementById("text").innerHTML = "Then Call Me!";
      document.getElementById("avatar").src = images[4];

    }

  //   var h = document.createElement("H1"); // Create the H1 element
  // if ("${text}" == "easter") {
  //     var t = document.createTextNode("HIII"); // Create a text element
  // }
  // h.appendChild(t); // Append the text node to the H1 element
  // document.body.insertBefore(h, document.body.childNodes[0]);
  // h.setAttribute("id", "header");
  // document.getElementById("header").style.color = "violet";
  // document.getElementById("header").style.padding = "2em";
  //
  // var p_tags=document.getElementsByTagName('p');
  // for(i=0;i<p_tags.length;i++)
  // {
  //     p_tags[i].setAttribute("style","font-size:"+40+"px");
  // }
  //

     `

  });
});
//
