var imageSources = ["barn1.jpeg", "barn3.jpg", "barn4.jpg", "barn5.jpg"];
var index = 0;

function getRandomInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rotateImage() {
  document.getElementById("imageF").src = imageSources[index];
  index++;

  if (index === imageSources.length) {
    index = 0;
  }

  var randomInterval = getRandomInterval(30, 150); 
  setTimeout(rotateImage, randomInterval);
}
rotateImage();
