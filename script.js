let textArray = ["BORED, HUH?", "LIKE MY POST!", "LOL YOU THOUGHT", "PRODUCTIVITY? NEVER HEARD OF IT.", "HERE WE GO AGAIN..."];


  function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let i = getRandom(textArray.length);
  let randomText = textArray[i];


  document.getElementById("text").innerHTML = textArray[i];
