var fileNames = [];
var density;

function preload() {
  var url = "https://api.github.com/repos/creativecodeuic/creativecodeuic.github.io/contents/";
  httpGet(url, 'json', false, function (response) {
    for (index in response) {
      if (response[index].name.includes("html")&&!response[index].name.includes("index")) {
        fileNames = append(fileNames, response[index].name);
        print(response[index].name);
      }
    }
  }
  );
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(255);
  density = displayDensity();
  textAlign(LEFT, TOP);
}

function draw() {
  if (fileNames.length==0)
    return;
  background(255);
  fill(0);
  textSize(24*density);
  text("Creative Code - Project 4 - Internet Data", width/50, height/25+24*density);
  textSize(18*density);
  for (var i = 0; i < fileNames.length; i++) {
    var baseline = height/25+24*density+(i+1)*28*density;
    if (mouseY > baseline && mouseY < baseline+18*density) {
      fill(127);
    }
    var name = fileNames[i].substring(0, fileNames[i].length-5);
    text(name, width/50, baseline);
  }
}
function mousePressed() {
  for (var i = 0; i < fileNames.length; i++) {
    var baseline = height/25+24*density+(i+1)*28*density;
    if (mouseY > baseline && mouseY < baseline+18*density)
      window.location.href = fileNames[i];
  }
}