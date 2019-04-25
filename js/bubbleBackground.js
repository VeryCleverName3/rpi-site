setInterval(doBubbles, 1000 / 60);

var bubbleSpawnTimer = 0;
var bubbles = document.getElementsByClassName("bubble");

function doBubbles(){
  bubbleSpawnTimer++;
  if(bubbleSpawnTimer > 60){
    var bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.right = "100vw";
    bubble.style.top = (Math.random() * 95) + "vh";
    document.body.append(bubble);
    bubbleSpawnTimer = 0;
  }
  bubbles = document.getElementsByClassName("bubble");
  for(var i = 0; i < bubbles.length; i++){
    bubbles[i].style.right = (parseFloat(bubbles[i].style.right.substring(0, bubbles[i].style.right.length - 2)) - 0.1) + "vw";
    if(parseFloat(bubbles[i].style.right.substring(0, bubbles[i].style.right.length - 2)) <= 0){
      document.body.removeChild(bubbles[i]);
    }
  }
}
