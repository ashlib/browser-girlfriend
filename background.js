// This listener is called when the user types the keyword ("hi") as a greeting
// and then tab, and then some text. The `text` argument to the listener
// is the text the person wrote.
// The `suggest` argument is a function that can be used to programmatically
// add auto-complete suggestions

chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
  console.log('the user typed "' + text + '"');

  suggest([{
      content: 'text',
      description: 'SUGGESTIONS/OPTIONS BELOW'
    },
    {
      content: 'sad',
      description: 'sad? depressed? hurt?'
    },
    {
      content: 'bored',
      description: 'bored'
    },
    {
      content: 'fine',
      description: 'fine? good? okay?'
    },
    {
      content: 'happy',
      description: 'great? happy?'
    },
    {
      content: 'missing me',
      description: 'missing me? *write "you" not "me"*'
    },
  ]);
});

chrome.omnibox.onInputEntered.addListener(function(text) {
  console.log('the user entered: "' + text + '"');
  chrome.tabs.executeScript({

    code: `

    var avatar = [
    "images/avatars/myAvatarHugs.png",
    "images/avatars/myAvatarLaugh1.png",
    "images/avatars/myAvatarSmile.png",
    "images/avatars/myAvatarYay.png",
    "images/avatars/myAvatarCall.png",
    "images/avatars/myAvatarSleep.png",
    ];

    var insta = [
    "images/instagram/insta.jpg",
    "images/instagram/insta1.jpg",
    "images/instagram/insta2.jpg",
    "images/instagram/insta3.jpg",
    "images/instagram/insta4.jpg",
    "images/instagram/insta5.jpg",
    "images/instagram/insta6.jpg",
    "images/instagram/insta7.jpg",
    "images/instagram/insta8.jpg",
    "images/instagram/insta9.jpg",
    ];

    var randomInsta = insta[Math.floor(Math.random() * insta.length)];

    if ("${text}" == "sad" || "${text}" == "depressed" || "${text}" == "hurt") {
      document.getElementById("text").innerHTML = "Oh no! Hugs?";
      document.getElementById("avatar").src = avatar[0];

      document.getElementById("heart-img").style.display = "block";
      document.getElementById("html").style.backgroundSize = "200px";
      document.body.style.backgroundSize = "200px";
      document.getElementById("cheerup-note").style.display = "block";

      document.getElementById("insta").style.display = "none";
      document.getElementById("cam").style.display = "none";
      document.getElementById("camButton").style.display = "none";
      document.getElementById("camPhoto").style.display = "none";
      document.getElementById("cam-note").style.display = "none";
      document.getElementById("fireworks").style.display = "none";
      document.getElementById("drag-note").style.display = "none";
      document.getElementById("link").style.display = "block";

      scrollToTop();
    }

    if ("${text}" == "bored") {
      document.body.style.marginBottom = "275px";

      document.getElementById("text").innerHTML = "No worries, look at all these funny Instagram posts! I DIED!";
      document.getElementById("avatar").src = avatar[1];

      document.getElementById("insta").src = randomInsta;
      document.getElementById("insta").style.display = "block";

      document.getElementById("heart-img").style.display = "none";
      document.getElementById("cheerup-note").style.display = "none";
      document.getElementById("cam").style.display = "none";
      document.getElementById("camButton").style.display = "none";
      document.getElementById("camPhoto").style.display = "none";
      document.getElementById("cam-note").style.display = "none";
      document.getElementById("fireworks").style.display = "none";
      document.getElementById("drag-note").style.display = "none";
      document.getElementById("link").style.display = "block";

      document.getElementById("html").style.backgroundSize = "0px";
      document.body.style.backgroundSize = "0px";

      scrollToTop();
    }


    if ("${text}" == "fine"  || "${text}" == "good" || "${text}" == "okay") {
      document.body.style.marginBottom = "10px";

      document.getElementById("text").innerHTML = "That's not good enough! You should be great! Let me see you smile!!!!";
      document.getElementById("avatar").src = avatar[2];


      document.getElementById("cam").style.display = "block";
      document.getElementById("camButton").style.display = "block";
      document.getElementById("camPhoto").style.display = "block";
      document.getElementById("cam-note").style.display = "block";

      document.getElementById("heart-img").style.display = "none";
      document.getElementById("cheerup-note").style.display = "none";
      document.getElementById("insta").style.display = "none";
      document.getElementById("fireworks").style.display = "none";
      document.getElementById("drag-note").style.display = "none";
      document.getElementById("link").style.display = "block";

      document.getElementById("html").style.backgroundSize = "0px";
      document.body.style.backgroundSize = "0px";

      scrollToTop();
      videoOn();
    }

    if ("${text}" == "great" || "${text}" == "happy") {
      // document.body.style.marginBottom = "15px";

      document.getElementById("text").innerHTML = "Yay!!!";
      document.getElementById("avatar").src = avatar[3];
      document.getElementById("avatar").style.transform = "translateY(30%)";

      document.getElementById("fireworks").style.display = "block";
      document.getElementById("drag-note").style.display = "block";

      document.getElementById("heart-img").style.display = "none";
      document.getElementById("cheerup-note").style.display = "none";
      document.getElementById("insta").style.display = "none";
      document.getElementById("cam").style.display = "none";
      document.getElementById("camButton").style.display = "none";
      document.getElementById("camPhoto").style.display = "none";
      document.getElementById("cam-note").style.display = "none";
      document.getElementById("cheerup-note").style.display = "none";
      document.getElementById("link").style.display = "none";

      document.getElementById("html").style.backgroundSize = "0px";
      document.body.style.backgroundSize = "0px";

      scrollToTop();
    }

    if ("${text}" == "missing you") {

      document.getElementById("text").innerHTML = "Then Call Me!";
      document.getElementById("avatar").src = avatar[4];
      document.getElementById("avatar").style.transform = "translateY(30%)";

      document.getElementById("link").style.display  ="block";
      document.getElementById("link").innerHTML = "📞";
      document.getElementById("link").href = "https://www.messenger.com/";

      document.getElementById("heart-img").style.display = "none";
      document.getElementById("cheerup-note").style.display = "none";
      document.getElementById("insta").style.display = "none";
      document.getElementById("cam").style.display = "none";
      document.getElementById("camButton").style.display = "none";
      document.getElementById("camPhoto").style.display = "none";
      document.getElementById("cam-note").style.display = "none";
      document.getElementById("fireworks").style.display = "none";
      document.getElementById("drag-note").style.display = "none";

      document.getElementById("html").style.backgroundSize = "0px";
      document.body.style.backgroundSize = "0px";

      scrollToTop();
    }

    function scrollToTop() {
          window.scrollTo(0, 0);
      }

    function videoOn() {
      var video = document.querySelector("#cam");
      var camPhoto = document.getElementById("camPhoto");
      var context = camPhoto.getContext("2d");

      if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(function (stream) {
            video.srcObject = stream;
            video.play();
          })
          .catch(function (err0r) {
            console.log("Something went wrong!");
          });
      }

      document.getElementById("camButton").addEventListener("click", function() {
  	  context.drawImage(video, 0, 0, 500, 375);
});
}
     `
  });
});
